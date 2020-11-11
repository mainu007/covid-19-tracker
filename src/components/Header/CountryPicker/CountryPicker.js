import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import classes from './CountryPicker.module.css';
import PublicIcon from '@material-ui/icons/Public';

export default function CountryPicker({ onHandler, data }) {
   const [countryValue, setCountryValue] = useState('');
   const handleChange = (event) => {
      setCountryValue(event.target.value);
      onHandler(event.target.value);
   };

   return (
      <div className={classes.Container}>
         <FormControl className={classes.FormControl}>
            <Select
               value={countryValue}
               onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
               variant="outlined"
            >
               <MenuItem value="">
                  <div className={classes.ItemName}>
                     <span>Worldwide</span>
                     <PublicIcon />
                  </div>
               </MenuItem>
               {data[0] &&
                  data.map((country) => (
                     <MenuItem
                        key={country.country}
                        value={country.countryInfo.iso2}
                     >
                        <div className={classes.ItemName}>
                           <span>{country.country}</span>
                           <img
                              className={classes.CountryFlag}
                              src={country.countryInfo.flag}
                              alt="..."
                           />
                        </div>
                     </MenuItem>
                  ))}
            </Select>
         </FormControl>
      </div>
   );
}
