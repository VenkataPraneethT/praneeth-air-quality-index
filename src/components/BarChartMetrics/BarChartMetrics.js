import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend , Cell} from 'recharts';

const BarChartMetrics = (props) =>  {
  const {cities, legendItems} = props;
    return (
        <BarChart
          width={800}
          height={300}
          data={cities}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} payload={legendItems}/>
          <Bar dataKey="formattedAqi" >
                   {
                        cities.map((entry) => (
                            <Cell key={entry.city} fill={entry.color} />
                        ))
                    }
          </Bar>
        </BarChart>
    );
}

export default BarChartMetrics;