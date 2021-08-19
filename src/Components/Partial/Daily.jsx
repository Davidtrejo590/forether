import { Component } from 'react';
import { Link } from 'react-router-dom';
import Control from '../../Control';

let days = [];
// let url = '';
class Days extends Component {
    render() {

        days = this.props.forecast;
        // url = this.props.url;

        return (
            <div className="card">
                <div className="row card-body">
                    <h5><strong>Pronóstico Diario</strong></h5>
                </div>
                <div className="card-body d-flex justify-content-around">
                    {
                        days?.map(day => {
                            return (
                                <div className="text-center" key={day.date}>
                                    <h3>{Control.get_dayName(day.date)}</h3>
                                    <h4><strong>{day.day.maxtemp_c}°</strong></h4>
                                    <img src={day.day.condition.icon} alt="..." />
                                    <h3 className="lead">{day.day.daily_chance_of_rain}%</h3>
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
                            pathname: '/bydays',
                            state: { days }
                        }}
                    >
                        Ver más
                    </Link>
                </div>
            </div>
        );
    }
}

export default Days;