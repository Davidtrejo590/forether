import { Component } from 'react';

class Current extends Component {
    render() {
        return (
            <div className="card d-flex flex-column">
                <div className="card-body">
                    <div className="row">
                        <h2>Tiempo de La Ciudad</h2>
                        <h3>Tiempo Estimado desde la API</h3>
                    </div>

                    <div className="d-flex">
                        <h1>16° from API</h1>
                        <p>Forecart Image from API</p>
                    </div>

                    <div className="d-flex flex-row">
                        <p>Forecast</p>
                        <p>Forecast in Number from API</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Current;