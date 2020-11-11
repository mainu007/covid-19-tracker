import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardItem from './CardItem';

export default ({ data, onHandler, casesType }) => {
   const {
      todayCases,
      todayRecovered,
      todayDeaths,
      cases,
      recovered,
      deaths,
      updated,
   } = data;

   return (
      <Grid container spacing={3}>
         <Grid item sm={4} xs={12}>
            <CardItem
               onHandler={() => onHandler('cases')}
               title="Infected"
               today={todayCases}
               total={cases}
               date={updated}
               borderColor={
                  casesType === 'cases' ? 'rgba(204, 16, 52, 1)' : 'transparent'
               }
            />
         </Grid>
         <Grid item sm={4} xs={12}>
            <CardItem
               onHandler={() => onHandler('recovered')}
               title="Recovered"
               today={todayRecovered}
               total={recovered}
               date={updated}
               borderColor={
                  casesType === 'recovered'
                     ? 'rgb(125, 215, 29)'
                     : 'transparent'
               }
            />
         </Grid>
         <Grid item sm={4} xs={12}>
            <CardItem
               onHandler={() => onHandler('deaths')}
               title="Deaths"
               today={todayDeaths}
               total={deaths}
               borderColor={
                  casesType === 'deaths' ? 'rgba(255, 0, 0, 1)' : 'transparent'
               }
               date={updated}
            />
         </Grid>
      </Grid>
   );
};
