import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { RadialBarChart, RadialBar } from 'recharts';
import { Typography } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { APP_CONFIG } from '../../utils/config/app.config';
import { COLORS } from '../../utils/config/theme.config';

import { useStyles } from '../../styles/styles';

const ChartDashboard = ({ cities }) => {
  const classes = useStyles();

  const [activeCity, setActiveCity] = React.useState(cities[0].city);
  const [activeCities, setActiveCities] = React.useState(cities);
  const handleChange = (event) => {
    setActiveCity(event.target.value);
    setActiveCities(cities.filter((city) => city.city === event.target.value));
  };

  const findCategory = (aqi) => {
    const categoryName = APP_CONFIG.CATEGORIES.filter((category) => {
      if (aqi >= category.startRange && aqi <= category.endRange) {
        return category.name;
      }
    });
    return categoryName[0];
  };

  const data = [
    {
      name: 'singleCity',
      uv: 500,
      fill: COLORS.GREY,
    },

    {
      uv: Math.round(activeCities[0].aqi),
      pv: 2400,
      fill: findCategory(Math.round(activeCities[0].aqi)).color,
    },
  ];
  
  return (
    <div>
      <Card className={classes.singleCityCard}>
        <CardContent className={classes.singleCardContent}>
          <div className={classes.chartContainer}>
            <RadialBarChart
              width={320}
              height={320}
              innerRadius='90%'
              outerRadius='100%'
              data={data}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar
                minAngle={10}
                background
                clockWise={true}
                dataKey='uv'
              />
            </RadialBarChart>

            <Typography variant='h2' className={classes.singleCityValue}>
              {activeCities[0].formattedAqi}
            </Typography>

            <Card className={classes.singleCityHeader}>
              <CardContent>
                <Typography
                  variant='subtitle1'
                  className={classes.subtitle}
                  style={{
                    color: findCategory(Math.round(activeCities[0].aqi)).color,
                  }}
                >
                  {findCategory(Math.round(activeCities[0].aqi)).name} AIR
                  QUALITY
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <FormControl variant='outlined' className={classes.buttonLight}>
              <Select
                native
                value={activeCity.city}
                onChange={handleChange}
                inputProps={{
                  name: 'City',
                  id: 'active-city',
                }}
              >
                {cities.map((city) => {
                  return (
                    <option key={city.city} value={city.city}>
                      {city.city}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartDashboard;
