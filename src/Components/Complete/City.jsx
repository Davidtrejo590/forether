import { Component } from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

class City extends Component{
    render(){
        return(
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Air Quality Index</h5>
                    <div className="row">
                        <div className="col-6">
                            <WbSunnyIcon></WbSunnyIcon>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" style={{borderRadius: '50px'}}>See More</button>
                </div>
            </div>
        );
    }
}

export default City;