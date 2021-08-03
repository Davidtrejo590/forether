import { Component } from 'react';
import SpeedIcon from '@material-ui/icons/Speed';

class Today extends Component{
    render(){
        return(
            <div className="card d-flex">
                <div className="card-body">
                    <h4 className="card-title">Today Component</h4>
                    <div className="row">
                        <div className="col-8">
                            <h3 className="card-title">16°</h3>
                            <p className="card-subtitle">Termal Sensation</p>
                        </div>
                        <div className="col-4">
                            <SpeedIcon></SpeedIcon> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="col-6"></div> 
                            <div className="col-6"></div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Today;
