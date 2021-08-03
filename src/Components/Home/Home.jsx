import { Component } from 'react';
import Today from '../Partial/Today';
import Hour from '../Partial/Hour';
import Days from '../Partial/Daily';
import Current from '../Complete/Current'
import City from '../Complete/City';
import AirQuality from '../Partial/AirQuality';
import axios from 'axios';

// let API_KEY = '8787039caeaf43ac92711921212807';

class Home extends Component {

    componentDidMount(){
        axios.get('http://api.weatherapi.com/v1/current.json?key=8787039caeaf43ac92711921212807&q=Mexico')
        .then( response => console.log(response.data))
        .catch()
    }



    render() {
        return (
            <div className="container-fluid d-flex flex-column">
                <div className="row m-3">
                    <div className="col-7"><Current></Current></div>
                    <div className="col-5"><AirQuality></AirQuality></div>
                </div>

                <div className="row m-3">
                    <div className="col-7"><Today></Today></div>
                    <div className="col-5">
                        <City></City>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col-7"><Hour></Hour></div>
                </div>

                <div className="row m-3">
                    <div className="col-7"><Days></Days></div>
                </div>
            </div>
        );
    }
}

export default Home;