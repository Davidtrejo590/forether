import { Component } from 'react';
import DetailHour from '../../UI/DetailHour'

let data = [];

class Weekend extends Component {
    render() {
        this.props.data ? data = this.props.data.forecast.forecastday[0] : data = this.props.location.state.full_hours
        // data = this.props.location.state.full_hours;
        return (
            <div className="card-body text-center">
                {
                    data.hour.map((hour) => {
                        return (
                            <DetailHour 
                                key={hour.time}
                                hour={hour}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Weekend;