import { Component } from 'react';
import Detail from '../../UI/Detail';
import Control from '../../Control';

let data = []

class Weekend extends Component {

    render() {
        this.props.data ? data = this.props.data.forecast.forecastday : data = this.props.location.state.days;
        return (
            <div className="card-body">
                {
                    data.map((day) => {
                        return (
                            <Detail
                                key={day.date}
                                date={Control.get_dayName(day.date)}
                                max={day.day.maxtemp_c}
                                min={day.day.mintemp_c}
                                icon={day.day.condition.icon}
                                text={day.day.condition.text}
                                chance={day.day.daily_chance_of_rain}
                                windy={day.day.maxwind_kph}
                                day={day.day}
                                astro={day.astro}
                            />
                        )
                    })
                }

            </div>
        );
    }
}

export default Weekend;