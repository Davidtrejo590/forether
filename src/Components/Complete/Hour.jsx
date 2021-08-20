import { Component } from 'react';
import DetailHour from '../../UI/DetailHour'

let data = [];

class Weekend extends Component {
    render() {
        data = this.props.location.state.full_hours;
        console.log('Data: ', data);
        return (
            <div>
               {/* <DetailHour>
                   </DetailHour>  */}
                {
                    data.map((hour) => {
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