import Today from '../Partial/Today';
import Hour from '../Partial/Hour';
import Daily from '../Partial/Daily';
import Current from '../Complete/Current'
import React, { Component } from 'react';
import axios from 'axios';

const private_key = '8787039caeaf43ac92711921212807';
const location = 'Mexico';
const base_url_forecast = 'http://api.weatherapi.com/v1/forecast.json';
const days = '7'
const lang = 'es';
const url_mx = base_url_forecast + '?key=' + private_key + '&q=' + location + '&lang=' + lang + '&days=' + days;

class Home extends Component {

    state = { current: {}, location: {}, forecast: [], data: {},  error: null }

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
            })
            .catch(error => {
                this.setState({ current: null, location: null, hour: null, forecast: null, data: null,  error: error });
            })
    }

    componentDidMount() {
        this.currentWeather(url_mx);
    }

    render() {
        // console.log(this.props.data)
        return (
            <div className="container p-5">

                <div className="row mb-2">
                    <div className="col-md-7"><Current
                        data={this.state.data}
                    /></div>
                    <div className="col-md-5">
                        <Today
                            data={this.state.data}
                        >
                        </Today>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-sm-7 ">
                        <Hour
                            data={this.state.data}
                        >
                        </Hour>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-sm-7">
                        <Daily
                            data={this.state.data}
                        >
                        </Daily>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;