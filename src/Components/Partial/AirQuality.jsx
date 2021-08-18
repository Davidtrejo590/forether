import { Component } from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

class AirQuality extends Component {
    render() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Air Quality Index</h5>
                    <div className="row">
                        <div className="col-6">
                            <WbSunnyIcon></WbSunnyIcon>
                        </div>
                        <div className="col-6">
                            <p className="card-text">Air Quality</p>
                            <p className="card-text"><small className="text-muted">Description</small></p>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" style={{borderRadius: '50px'}}>See More</button>
                </div>
            </div>
        );
    }
}

export default AirQuality