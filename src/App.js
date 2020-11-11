import React, { Component } from 'react';
import { Card, CardContent, Container, Grid } from '@material-ui/core';
import { fetchData, fetchCountries } from './api';
import { Cards, Header, Chart, Map } from './components';
import Progress from './components/Progress';
import Tables from './components/Tables';
import classes from './App.module.css';
import 'leaflet/dist/leaflet.css';

class App extends Component {
   state = {
      data: {},
      countriesData: [],
      loading: true,
      country: '',
      casesType: 'cases',
      mapCenter: { lat: 20.80746, lng: -0.4796 },
      mapZoom: 2,
   };

   initData = (country) => {
      fetchData(country).then((data) => {
         if (data.error) {
            console.log(data.error);
         } else {
            if (country) {
               this.setState({
                  data,
                  mapCenter: {
                     lat: data.countryInfo.lat,
                     lng: data.countryInfo.long,
                  },
                  mapZoom: 4,
               });
            } else {
               this.setState({
                  data,
                  mapCenter: { lat: 20.80746, lng: -0.4796 },
                  mapZoom: 2,
               });
            }
         }
      });
   };

   fetchCountriesData = () => {
      fetchCountries().then((data) => {
         if (data.error) {
            console.log(data.error);
         } else {
            this.setState({ countriesData: data, loading: false });
         }
      });
   };

   componentDidMount() {
      this.initData();
      this.fetchCountriesData();
   }

   countryPickerHandler = (country) => {
      this.initData(country);
      this.setState({ country });
   };

   cardHandler = (casesType) => {
      this.setState({ casesType });
   };

   render() {
      const {
         loading,
         country,
         countriesData,
         casesType,
         mapCenter,
         mapZoom,
      } = this.state;
      return (
         <div className={classes.App}>
            <Container maxWidth="xl">
               <Header
                  countriesData={countriesData}
                  loading={loading}
                  onHandler={this.countryPickerHandler}
               />
               {loading ? (
                  <Progress />
               ) : (
                  <>
                     <Grid container spacing={3}>
                        <Grid item md={8} sm={12} xs={12}>
                           <Cards
                              data={this.state.data}
                              onHandler={this.cardHandler}
                              casesType={casesType}
                           />
                           <Card className={classes.MapCard}>
                              <CardContent className={classes.MapCardContent}>
                                 <Map
                                    countries={countriesData}
                                    casesType={casesType}
                                    center={mapCenter}
                                    zoom={mapZoom}
                                 />
                              </CardContent>
                           </Card>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                           <Card className={''}>
                              <CardContent>
                                 <Tables data={countriesData} />
                                 <Chart
                                    country={country}
                                    casesType={casesType}
                                 />
                              </CardContent>
                           </Card>
                        </Grid>
                     </Grid>
                  </>
               )}
            </Container>
         </div>
      );
   }
}

export default App;
