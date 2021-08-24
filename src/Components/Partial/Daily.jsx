import { Component } from 'react';
import { Link } from 'react-router-dom';
import Control from '../../Control';

let days = [];
class Days extends Component {

    render() {
        this.props.data.forecast ? days = this.props.data.forecast.forecastday : days = [];
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row mb-3">
                        <h5><strong>Pronóstico Diario</strong></h5>
                    </div>
                    <div className="row mb-3">
                        {
                            days?.map(day => {
                                return (
                                    <div className="col-md text-center" key={day.date}>
                                        <h3>{`${Control.get_dayName(day.date)}`}</h3>
                                        <h4><strong>{`${day.day.maxtemp_c}°`}</strong></h4>
                                        <img src={day.day.condition.icon} alt="..." />
                                        <h3 className="lead">{`${day.day.daily_chance_of_rain}%`}</h3>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Link
                                className="btn btn-primary"
                                style={{ borderRadius: '50px' }}
                                to={{
                                    pathname: '/bydays',
                                    state: { days }
                                }}
                            >
                                Próximos Días
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Days;