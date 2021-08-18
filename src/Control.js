class Control {

    // Static Methods
    static splitDate = (date) => {
        if (typeof (date) === 'string') {
            let items = date.split(' ');
            return items[1];
        }
    }

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


    static get_dayName = ( date ) => {
        let week_days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Vierenes', 'Sábado', 'Domingo'];
        let date_now = new Date(date);
        let week_day = week_days[date_now.getDay()];
    
        if (date === this.get_date_time(false)) {
            let day = 'Hoy';
            return day;
        } else {
            return week_day;
        }
    }

}
export default Control;


