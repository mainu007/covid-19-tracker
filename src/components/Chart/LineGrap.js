import React from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
   lineTitle: {
      marginTop: 15,
   },
   lineContainer: {
      marginTop: 15,
      height: 250,
   },
}));

const options = {
   legend: {
      display: false,
   },
   elements: {
      point: {
         radius: 0,
      },
   },
   maintainAspectRatio: false,
   tooltips: {
      mode: 'index',
      intersect: false,
      callbacks: {
         label: function (tooltipItem, data) {
            return numeral(tooltipItem.value).format('+0,0');
         },
      },
   },
   scales: {
      xAxes: [
         {
            type: 'time',
            time: {
               format: 'MM/DD/YY',
               tooltipFormat: 'll',
            },
         },
      ],
      yAxes: [
         {
            gridLines: {
               display: false,
            },
            ticks: {
               // Include a dollar sign in the ticks
               callback: function (value, index, values) {
                  return numeral(value).format('0a');
               },
            },
         },
      ],
   },
};

const casesTypeColors = {
   cases: {
      borderColor: '#CC1034',
      backgroundColor: 'rgba(204, 16, 52, 0.5)',
   },
   recovered: {
      borderColor: '#7dd71d',
      backgroundColor: 'rgba(125, 215, 29, 0.5)',
   },
   deaths: {
      borderColor: '#fb4443',
      backgroundColor: 'rgba(251, 68, 67, 0.5)',
   },
};

const LineGrap = ({ data, casesType = 'cases' }) => {
   const classes = useStyles();

   return (
      <>
         <h3 className={classes.lineTitle}>Worldwide new {casesType}</h3>
         <div className={classes.lineContainer}>
            <Line
               data={{
                  datasets: [
                     {
                        ...casesTypeColors[casesType],
                        data: data,
                     },
                  ],
               }}
               options={options}
            />
         </div>
      </>
   );
};

export default LineGrap;
