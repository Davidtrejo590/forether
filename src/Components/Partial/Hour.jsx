import { Component } from 'react';
import { Link } from 'react-router-dom';
import Control from '../../Control';


let hours = [];
let full_hours = [];
class Hour extends Component {

    render() {
        hours = Control.forecast_by_hours(this.props.hour);
        full_hours = this.props.hour;
        return (
            <div className="card">
                <div className="row card-body">
                    <h5><strong>Pronóstico por hora</strong></h5>
                </div>
                <div className="card-body d-flex justify-content-around">
                    {
                        hours?.map(hour => {
                            return (
                                <div className="text-center" key={hour.time}>
                                    <h3>{Control.splitDate(hour.time)}</h3>
                                    <h4><strong>{hour.temp_c}°</strong></h4>
                                    <img src={hour.condition.icon} className="" alt="..." />
                                    <h3 className="lead">{hour.chance_of_rain}%</h3>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="card-body">
                    <Link
                        className="btn btn-primary"
                        style={{ borderRadius: '50px' }}
                        to= {{
                            pathname: '/byhour',
                            state: { full_hours }
                        }}
                    >
                        Ver más
                    </Link>
                </div>
            </div>
        );
    }
}

export default Hour;