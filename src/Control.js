class Control {

    // Static Methods
    static splitDate = (date) => {
        if (typeof (date) === 'string') {
            let items = date.split(' ');
            return items[1];
        }
    }

    static current_date = () => {
        let today = new Date();
        let year = today.getFullYear()
        let month = today.getMonth() + 1
        let day = today.getDate()
        let time = today.getHours() + ':00'

        month < 10 ? month = '0' + month.toString() : month = today.getMonth();
        let date_time = year + '-' + month + '-' + day + ' ' + time;
        return date_time;
    }

    static forecast_by_hours = (hours) => {
        let hour = [];
        hours?.map(function (current, index, array) {
            if (current.time === Control.current_date()) {
                // console.log(array[index]);
                for (let i = 0; i < 4; i++) {
                    hour.push(array[index + i]);
                    // console.log(hour[i])
                }
            }
            return hour;
        })

        return hour;

    }

}
export default Control;


