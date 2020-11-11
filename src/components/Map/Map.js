import React from 'react';
import { Map as MapContainer, TileLayer } from 'react-leaflet';
import CountryCircle from './CountryCircle/CountryCircle';
import classes from './Map.module.css';

const Map = ({ countries, casesType, center, zoom }) => {
   return (
      <div className={classes.Map}>
         <MapContainer
            className={classes.MapContainer}
            center={center}
            zoom={zoom}
         >
            <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <CountryCircle data={countries} casesType={casesType} />
         </MapContainer>
      </div>
   );
};

export default Map;
