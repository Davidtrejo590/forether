import { Component } from 'react';
import { Link } from 'react-router-dom';
import Control from '../../Control';


let hours = [];
let full_hours = [];
class Hour extends Component {

    render() {
        // console.log(this.props.data.forecast.forecastday[0].hour)
        this.props.data.forecast ? hours = Control.forecast_by_hours(this.props.data.forecast.forecastday[0].hour) : hours = [];
        this.props.data.forecast ? full_hours = this.props.data.forecast.forecastday[0]: full_hours = [];
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row mb-3">
                        <h5><strong>Pronóstico por hora</strong></h5>
                    </div>
                    <div className="row mb-3">
                        {
                            hours?.map(hour => {
                                return (
                                    <div className="col-md text-center" key={hour.time}>
                                        <h3>{Control.splitDate(hour.time)}</h3>
                                        <h4><strong>{hour.temp_c}°</strong></h4>
                                        <img src={hour.condition.icon} className="" alt="..." />
                                        <h3 className="lead">{hour.chance_of_rain}%</h3>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col-7">
                            <Link
                                className="btn btn-primary"
                                style={{ borderRadius: '50px' }}
                                to={{
                                    pathname: '/byhour',
                                    state: { full_hours }
                                }}
                            >
                                Próximas Horas
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hour;