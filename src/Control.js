class Control {

    // Static Methods

    // Method to separate date by space
    static splitDate = (date) => {
        if (typeof (date) === 'string') {
            let items = date.split(' ');
            return items[1];
        }
    }

    // Method to GET current date, it can be with current hour or whitout
    static get_date_time = (complete) => {
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        let time = today.getHours() + ':00';
        let date_time = '';

        month < 10 ? month = '0' + month.toString() : month = today.getMonth();
        complete === true ? date_time = year + '-' + month + '-' + day + ' ' + time : date_time = year + '-' + month + '-' + day
        return date_time;
    }

    // Methid to get only 5 hours of data for forecast
    static forecast_by_hours = (hours) => {
        let hour = [];
        hours?.map(function (current, index, array) {
            if (current.time === Control.get_date_time(true)) {
                for (let i = 0; i < 5; i++) {
                    if (index + i <= 23) {
                        hour.push(array[index + i]);
                    }
                }
            }
            return hour;
        })

        return hour;

    }


    // Method to transform a date to date with day name
    static get_dayName = (date) => {
        let week_days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
        let date_now = new Date(date);
        let week_day = week_days[date_now.getDay()];

        if (date === this.get_date_time(false)) {
            let day = 'Hoy';
            return day;
        } else {
            return week_day;
        }
    }

    // Method to get only the hours of a time
    static splitTime = (time) => {
        let items = time.split(':');
        return items[0];
    }

    // Method to transform time from 24_hours format to 12_hours formaat
    static time_24to12 = (time) => {
        let hours = this.splitTime(time);
        let AMorPM = hours >= 12 ? 'PM' : 'AM';
        hours = (hours % 12) || 12;

        let time_12 = `${hours}:00 ${AMorPM}`;

        return time_12;
    }


}
export default Control;


