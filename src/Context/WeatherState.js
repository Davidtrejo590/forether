import React, { useReducer } from 'react';
import WeatherReducer from './WeatherReducer';
import WeatherContext from './WeatherContext';
import { GET_WEATHER } from './Types';
import axios from 'axios';


const WeatherState = (props) => {

    // Initial State
    const initialState = {
        data: [],
        error: null
    };

    const [state, dispatch] = useReducer(WeatherReducer, initialState);

    const getWeather = async (url) => {
        const response = await axios.get(url);
        dispatch({
            type: GET_WEATHER,
            payload: response.data
        });

        // console.log('In Weather State: ', response.data);
    }

    return(
        <WeatherContext.Provider value={{
            data: state.data,
            getWeather
        }}>
            {props.children}
        </WeatherContext.Provider>
    );
}


export default WeatherState;