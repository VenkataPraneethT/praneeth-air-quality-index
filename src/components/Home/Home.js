import Layout from '../Layout/Layout';
import { useStyles } from '../../styles/styles';
import React, { useEffect, useState } from 'react';
import ChartDashboard from '../QualityMetrics/ChartDashboard';
import LiveMetrics from '../QualityMetrics/LiveMetrics';
import { initiateSocket, subscribe } from '../../utils/apis/aqi';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CITIES_CONFIG } from '../../utils/config/cities.config';
import BarChartMetrics from '../BarChartMetrics/BarChartMetrics';
import { APP_CONFIG } from '../../utils/config/app.config';

const Home = () => {
  const classes = useStyles();
  
  const defaultCities = [...CITIES_CONFIG];
  const [cities, setCities] = useState([]);
  const [updatedCities, setUpdatedCities] = useState(defaultCities);

  const legendItems = APP_CONFIG.CATEGORIES.map((item) => {
    const data = {
      value:`${item.name} ( ${item.startRange} - ${item.endRange})`,
      type:'rect',
      color:item.color,
      id:item.name
    };
    return data;
  })
  

  useEffect(() => {
    initiateSocket();
  }, []);

  useEffect(() => {
    subscribe((error, newMessages) => {
      if (error) return;
      let __cities__ = cities;
      newMessages.map((newMessage) => {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0'+minutes : minutes;
        newMessage.lu = `${hours}: ${minutes} ${ampm}`;
        newMessage.formattedAqi = Math.round(newMessage.aqi * 100 + Number.EPSILON) / 100;
        const __aqi = Math.round(newMessage.aqi)
        APP_CONFIG.CATEGORIES.map((category) => {
          if(__aqi >= category.startRange && __aqi <= category.endRange) {
            newMessage.color = category.color;
          }

        })
        let messageInCities = __cities__.findIndex(
          (city) => city.city === newMessage.city
        );
        messageInCities >= 0
          ? (__cities__[messageInCities] = newMessage)
          : __cities__.push(newMessage);
      });
      setUpdatedCities(newMessages);
      return setCities(__cities__);
    }, []);
  });

  return (
    <div>
      <Layout className={classes.root}>
        {cities.length > 0 ? (
          <>
            <div className={classes.container}>
              <ChartDashboard cities={cities} />
              <LiveMetrics cities={cities} />
            </div>
            {cities.length === 12 && <BarChartMetrics cities={cities} legendItems={legendItems}/>}  
          </>
        ) : (
          <div className={classes.loadContainer}>
            {' '}
            <CircularProgress disableShrink />
          </div>
        )}
      </Layout>
    </div>
  );
};

export default Home;
