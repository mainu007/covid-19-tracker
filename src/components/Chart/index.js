import React, { useState, useEffect } from 'react';
import { fetchTotalData } from '../../api';
import LineGrap from './LineGrap';

const bieldChartData = (data, dataType = 'cases') => {
   let ChartData = [];
   let lastDataPoint;

   for (let date in data[dataType]) {
      if (lastDataPoint) {
         const newSingleData = {
            x: date,
            y: data[dataType][date] - lastDataPoint,
         };
         ChartData.push(newSingleData);
      }
      lastDataPoint = data[dataType][date];
   }
   return ChartData;
};

export default ({ country, casesType = 'cases' }) => {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetchTotalData().then((data) => {
         if (data.error) {
            console.log(data.error);
         } else {
            setData(bieldChartData(data, casesType));
         }
      });
   }, [casesType]);

   return <LineGrap data={data} casesType={casesType} />;
};
