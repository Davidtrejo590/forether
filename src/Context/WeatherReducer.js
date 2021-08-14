import { GET_WEATHER } from './Types';

const WeatherReducer = ( state, action ) => {
    const { payload, type } = action;

    switch(type){
        case GET_WEATHER:
            return{
                ...state,
                data: payload
            }
        default:
            return state;
    }
}

export default WeatherReducer;