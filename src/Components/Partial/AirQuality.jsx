import { Component } from 'react';
import CardAir from '../../UI/CardAir';

class AirQuality extends Component {
    render() {
        console.log(this.props.data.current);
        return (
            this.props.data.current ?
                <div className="container">
                    <div className="row">
                        <div className="card">
                            <div className="card-body">
                                <h5>{`Calidad del Aire hoy en ${this.props.data.location.name}`}</h5>
                                <div className="row">
                                    <div className="col-8" style={{ borderRight: '1px solid black' }}>
                                        <p className="display-4">{this.props.data.current.air_quality.o3}</p>
                                    </div>
                                    <div className="col-4">
                                        <h5>Contaminante Pricincipal</h5>
                                        <p className="lead">O3 (Ozono)</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h5>{`Contaminantes del Aire`}</h5>
                                <CardAir data={this.props.data.current}>

                                </CardAir>
                            </div>
                        </div>
                    </div>
                </div>
                :

                <div></div>
        );
    }
}

export default AirQuality