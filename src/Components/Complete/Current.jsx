import { Component } from 'react';
import Control from '../../Control';

class Current extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">

                    <div className="row">
                        <h2>Tiempo en {this.props.country}</h2>
                        <p className="lead">A partir de las {Control.splitDate(this.props.last_updated)}</p>
                    </div>

                    <div className="row d-flex flew-row justify-content-between">
                        <div className="col-6">
                            <h1 className="display-3"><strong>{this.props.temp}°</strong></h1>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <img src={this.props.url_img} alt="rounded"></img>
                        </div>
                        
                    </div>

                    <div className="d-flex flex-row justify-content-between">
                        <p><strong>{this.props.current}</strong></p>
                        <p><strong>{this.props.min_temp}° / {this.props.max_temp}°</strong> </p>
                    </div>

                    <div className="d-flex flex-row">
                        <h5>{this.props.avg_rain}% de Probabilidad de Lluvias</h5>
                    </div>

                </div>
            </div>
        );
    }
}

export default Current;