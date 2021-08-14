import { Component } from 'react';
import Control from '../../Control';

class Current extends Component {

    render() {
        return (
            <div className="card d-flex flex-column p-2">
                <div className="card-body">
                    <div className="row">
                        <h2>Tiempo en {this.props.country}</h2>
                        <h3>A partir de las {Control.splitDate(this.props.last_updated)}</h3>
                    </div>

                    <div className="d-flex flew-row justify-content-between">
                        <h1>{this.props.temp}°</h1>
                        <img src= {this.props.url_img}  alt=""></img>
                    </div>

                    <div className="d-flex flex-row justify-content-between">
                        <p>{this.props.current}</p>
                        <p>{this.props.min_temp}° / {this.props.max_temp}°</p>
                    </div>

                    <div className="d-flex flex-row">
                        <p>{this.props.avg_rain}% de Probabilidad de Lluvias</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Current;