import { Component } from 'react';
import Control from '../../Control';


let hours = [];
class Hour extends Component {

    render() {
        hours = Control.forecast_by_hours(this.props.hour);
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
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        style={{ borderRadius: '50px' }}
                        onClick = { event => window.location.href='byhour'}
                    >See More</button>
                </div>
            </div>
        );
    }
}

export default Hour;