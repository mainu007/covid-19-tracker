import React from 'react';
import { Circle, Popup } from 'react-leaflet';
import numeral from 'numeral';
import classes from './CountryCircle.module.css';

const casesTypeColors = {
   cases: {
      hex: '#CC1034',
      rgb: 'rgb(204, 16, 52)',
      half_op: 'rgba(204, 16, 52, 0.5)',
      multiplier: 800,
   },
   recovered: {
      hex: '#7dd71d',
      rgb: 'rgb(125, 215, 29)',
      half_op: 'rgba(125, 215, 29, 0.5)',
      multiplier: 1200,
   },
   deaths: {
      hex: '#fb4443',
      rgb: 'rgb(251, 68, 67)',
      half_op: 'rgba(251, 68, 67, 0.5)',
      multiplier: 2000,
   },
};

const CountryCircle = ({ data, casesType = 'cases' }) => {
   return data.map((country) => (
      <Circle
         key={country.country}
         center={[country.countryInfo.lat, country.countryInfo.long]}
         color={casesTypeColors[casesType].hex}
         fillColor={casesTypeColors[casesType].hex}
         fillOpacity={0.4}
         radius={
            Math.sqrt(country[casesType]) *
            casesTypeColors[casesType].multiplier
         }
      >
         <Popup>
            <div className={classes.InfoContainer}>
               <div
                  className={classes.InfoFlag}
                  style={{
                     backgroundImage: `url(${country.countryInfo.flag})`,
                  }}
               ></div>
               <div className={classes.InfoName}>{country.country}</div>
               <div className={classes.InfoConfirmed}>
                  Cases: {numeral(country.cases).format('0,0')}
               </div>
               <div className={classes.InfoRecovered}>
                  Recovered: {numeral(country.recovered).format('0,0')}
               </div>
               <div className={classes.InfoDeaths}>
                  Deaths: {numeral(country.deaths).format('0,0')}
               </div>
            </div>
         </Popup>
      </Circle>
   ));
};

export default CountryCircle;
