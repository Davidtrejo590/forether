import { Component } from 'react';
import Control from '../../Control';

class Current extends Component {

    render() {
        return (
            this.props.data.location ?
                <div className="card">
                    <div className="card-body">

                        <div className="row">
                            <h2>{`Tiempo en ${this.props.data.location.name}`}</h2>
                            <p className="lead">{`A partir de las ${Control.splitDate(this.props.data.current.last_updated)}`}</p>
                        </div>

                        <div className="row d-flex flew-row justify-content-between">
                            <div className="col-sm-6">
                                <h1 className="display-3"><strong>{`${this.props.data.current.temp_c}°`}</strong></h1>
                            </div>
                            <div className="col-sm-6 d-flex justify-content-end">
                                <img src={this.props.data.current.condition.icon} alt="rounded"></img>
                            </div>

                        </div>

                        <div className="row d-flex flex-row justify-content-between">
                            <div className="col-md-6">
                                <p><strong>{this.props.data.current.condition.text}</strong></p>
                            </div>
                            <div className="col-md-6 d-flex justify-content-end">
                                <p><strong>{`${this.props.data.forecast.forecastday[0].day.mintemp_c}°/${this.props.data.forecast.forecastday[0].day.maxtemp_c}°`}</strong></p>
                            </div>
                        </div>

                        <div className="row">
                            <h5>{`${this.props.data.forecast.forecastday[0].day.daily_chance_of_rain}% de Probabilidad de Lluvias`}</h5>
                        </div>

                    </div>
                </div>
                :
                <div></div>
        );
    }
}

export default Current;