import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layouts/Layout';
import { Route, Switch } from 'react-router-dom';
import Hour from './Components/Complete/Hour';
import Daily from './Components/Complete/Daily';
import Weekend from './Components/Complete/Weekend';
import Month from './Components/Complete/Month';
import Home from './Components/Home/Home';
import AirQuality from './Components/Partial/AirQuality';
import axios from 'axios';

const private_key = '8787039caeaf43ac92711921212807';
const location = 'Mexico';
const base_url_forecast = 'http://api.weatherapi.com/v1/forecast.json';
const days = '3'
const lang = 'es';
const aqi = 'yes'
const url_mx = base_url_forecast + '?key=' + private_key + '&q=' + location + '&lang=' + lang + '&days=' + days + '&aqi=' + aqi;


class App extends Component {

  state = { current: {}, location: {}, forecast: [], data: {}, error: null }

  // Fetch Data from Weather API
  currentWeather(url) {
    axios.get(url)
      .then(response => {
        this.setState({
          data: response.data,
          current: response.data.current,
          location: response.data.location,
          forecast: response.data.forecast.forecastday,
          error: null
        });
        console.log(this.state.data)
      })
      .catch(error => {
        this.setState({ current: null, location: null, hour: null, forecast: null, data: null, error: error });
      })
  }

  componentDidMount() {
    this.currentWeather(url_mx);
  }


  render() {



    let routes = (
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/today' exact component={Home}></Route>
        <Route path='/byhour' render={() => <Hour data={this.state.data}></Hour>}></Route>
        <Route path='/bydays' render={() => <Daily data={this.state.data}></Daily>}></Route>
        <Route path='/weekend' exact component={Weekend}></Route>
        <Route path='/byMonth' exact component={Month}></Route>
        <Route path="/airCondition" render={() => <AirQuality data={this.state.data}></AirQuality>}></Route>
      </Switch>
    );

    return (
      <Layout data={this.state.data}>
        {routes}
      </Layout>
    );
  }
}

export default App;