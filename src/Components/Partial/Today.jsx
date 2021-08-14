import { Component } from 'react';
import SpeedIcon from '@material-ui/icons/Speed';

class Today extends Component {
    render() {
        return (
            <div className="card d-flex">
                <div className="card-body">
                    <h4 className="card-title">El Tiempo en {this.props.country} hoy</h4>
                    <div className="row">
                        <div className="col-8">
                            <h3 className="card-title">{this.props.current_data.temp_c} °</h3>
                            <p className="card-subtitle">Termal Sensation</p>
                        </div>
                        <div className="col-4">
                            <SpeedIcon></SpeedIcon>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="col-6">
                                <div><p>Máx/Min</p> {this.props.max_temp}° / {this.props.min_temp}°</div>
                                <div><p>Húmedad</p> {this.props.current_data.humidity} %</div>
                                <div><p>Presión</p> {this.props.current_data.pressure_mb} mb</div>
                                <div><p>Visibilidad</p> {this.props.current_data.vis_km} km</div>
                            </div>
                            <div className="col-6">
                                <div><p>Viento</p> {this.props.current_data.wind_kph} km/h</div>
                                <div><p>Condensación</p> {this.props.current_data.cloud} °</div>
                                <div><p>índice UV</p> {this.props.current_data.uv}</div>
                                <div><p>Sensación Térmica</p> {this.props.current_data.feelslike_c}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Today;
