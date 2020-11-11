import React from 'react';
import CountryPicker from './CountryPicker/CountryPicker';
import CovidLogo from '../../images/image.png';
import classes from './Header.module.css';

const Header = ({ loading, countriesData, onHandler }) => {
   return (
      <div className={classes.logoContainer}>
         <img src={CovidLogo} className={classes.logoImage} alt="..." />
         {!loading && (
            <CountryPicker data={countriesData} onHandler={onHandler} />
         )}
      </div>
   );
};

export default Header;
