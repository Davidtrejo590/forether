import { Component } from 'react';
import Control from '../../Control';



let hours = [];
class Hour extends Component {

    componentDidMount() {
        // hours = Control.forecast_by_hours(this.props.hour)
        // console.log('Hola', this.props.hour)
        // Control.forecast_by_hours(this.props.hour)

    }

    render() {
        hours = Control.forecast_by_hours(this.props.hour)
        console.log(hours)
        return (
            <div className="card">
                <div className="row">
                    <h4 className="card-title">
                        <p>Pronóstico en las próximas horas</p>
                    </h4>
                </div>
                <div className="card-body d-flex justify-content-around">
                    {
                        hours.map(hour => {
                            return (
                                <div class="text-center" style={{width: '5rem'}}>
                                    <p class="card-text">{Control.splitDate(hour.time)}</p>
                                    <p class="card-text">{hour.temp_c}°</p>
                                    <div class="card-body">
                                        <img src={hour.condition.icon} class="card-img-top" alt="..." />
                                    </div>
                                    <p class="card-text">{hour.chance_of_rain}%</p>
                                </div>

                            )
                        })
                    }
                </div>
                {/* <div className="d-flex flex-row">
                    
                        <p>Pronóstico en las próximas horas</p>
                        {
                            hours?.map(hour => {
                                return (
                                    <div className="d-flex flex-row">
                                        {hour.is_day}
                                    </div>
                                )
                            })
                        }
                    </h4>
                </div> */}
            </div>
        );
    }
}

export default Hour;