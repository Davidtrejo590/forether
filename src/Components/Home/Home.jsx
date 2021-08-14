import Today from '../Partial/Today';
import Hour from '../Partial/Hour';
import Days from '../Partial/Daily';
import Current from '../Complete/Current'
import City from '../Complete/City';
import AirQuality from '../Partial/AirQuality';
import React, { Component } from 'react';
import axios from 'axios';

const private_key = '8787039caeaf43ac92711921212807';
const location = 'Mexico';
// const base_url_current = 'http://api.weatherapi.com/v1/current.json';
const base_url_forecast = 'http://api.weatherapi.com/v1/forecast.json';
const lang = 'es';
const url_mx = base_url_forecast + '?key=' + private_key + '&q=' + location + '&lang=' + lang;

class Home extends Component {

    state = { current: {}, location: {}, forecast: {}, hour: [], error: null }

    // Fetch Data from Weather API
    currentWeather ( url ) {
        axios.get( url )
            .then( response => {
                this.setState({ 
                    current: response.data.current, 
                    location: response.data.location,
                    forecast: response.data.forecast.forecastday[0].day,
                    hour: response.data.forecast.forecastday[0].hour,
                    error: null });
                // console.log(response.data.forecast.forecastday[0].hour)
            })
            .catch( error => {
                this.setState({ current: null, location: null, hour: null,  error: error });
            })
    }

    componentDidMount(){
        this.currentWeather(url_mx);
    }

    render() {
        return (
            <div className="container-fluid d-flex flex-column">
                <div className="row m-3">
                    <div className="col-7"><Current
                        country = {this.state.location.name}
                        last_updated = {this.state.current.last_updated}
                        temp = {this.state.current.temp_c}
                        url_img = {this.state.current.condition?.icon}
                        current = {this.state.current.condition?.text}
                        min_temp = {this.state.forecast.mintemp_c}
                        max_temp = {this.state.forecast.maxtemp_c}
                        avg_rain = {this.state.forecast.daily_chance_of_rain}
                    /></div>
                    <div className="col-5"><AirQuality></AirQuality></div>
                </div>

                <div className="row m-3">
                    <div className="col-7"><Today
                        country = {this.state.location.name}
                        min_temp = {this.state.forecast.mintemp_c}
                        max_temp = {this.state.forecast.maxtemp_c}
                        current_data = {this.state.current}
                    ></Today></div>
                    <div className="col-5"><City

                    ></City></div>
                </div>

                <div className="row m-3">
                    <div className="col-7"><Hour
                        hour = {this.state.hour}
                    >
                        </Hour></div>
                </div>

                <div className="row m-3">
                    <div className="col-7"><Days></Days></div>
                </div>
            </div>
        );
    }
}

export default Home;