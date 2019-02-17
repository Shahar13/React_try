import React, { Component } from 'react';
import PickyDateTime from 'react-picky-date-time';

class ManagerCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPickyDateTime: true,
            date: '30',
            month: '01',
            year: '2019',
            hour: '03',
            minute: '10',
            second: '40',
            meridiem: 'PM'
        };
    }
    onYearPicked(res) {
        console.log('1');
        const { year } = res;
        this.setState({ year: year });
    }

    onMonthPicked(res) {
        console.log('2');
        const { month, year } = res;
        this.setState({ year: year, month: month });
    }

    onDatePicked(res) {
        console.log('3');

        const { date, month, year } = res;
        this.setState({ year: year, month: month, date: date });
    }

    onResetDate(res) {
        console.log('4');

        const { date, month, year } = res;
        this.setState({ year: year, month: month, date: date });
    }

    onResetDefaultDate(res) {
        console.log('5');

        const { date, month, year } = res;
        this.setState({ year: year, month: month, date: date });
    }

    onSecondChange(res) {
        console.log('6');

        this.setState({ second: res.value });
    }

    onMinuteChange(res) {
        console.log('7');

        this.setState({ minute: res.value });
    }

    onHourChange(res) {
        console.log('8');

        this.setState({ hour: res.value });
    }

    onMeridiemChange(res) {
        console.log('9');

        this.setState({ meridiem: res });
    }

    onResetTime(res) {
        console.log('10');

        this.setState({
            second: res.clockHandSecond.value,
            minute: res.clockHandMinute.value,
            hour: res.clockHandHour.value
        });
    }

    onResetDefaultTime(res) {
        console.log('11');

        this.setState({
            second: res.clockHandSecond.value,
            minute: res.clockHandMinute.value,
            hour: res.clockHandHour.value
        });
    }

    onClearTime(res) {
        console.log('12');

        this.setState({
            second: res.clockHandSecond.value,
            minute: res.clockHandMinute.value,
            hour: res.clockHandHour.value
        });
    }

    // just toggle your outter component state to true or false to show or hide <PickyDateTime/>
    openPickyDateTime() {
        console.log('13');

        this.setState({ showPickyDateTime: true });
    }

    onClose() {
        this.setState({ showPickyDateTime: false });
    }

    render() {
        const {
            showPickyDateTime,
            date,
            month,
            year,
            hour,
            minute,
            second,
            meridiem
        } = this.state;

        return (
            <PickyDateTime
                // size="xs"
                // mode={1}
                // show={showPickyDateTime}
                // locale="en-us"
                // // defaultTime={hour:minute:second meridiem} // "HH:MM:SS AM"
                // defaultTime={`${hour}:${minute}`} // OPTIONAL. format: "HH:MM:SS AM"
                // defaultDate={month/date/year} // "MM/DD/YYYY"
                // onClose={() => this.setState({ showPickyDateTime: false })}
                // onYearPicked={res => this.onYearPicked(res)}
                // onMonthPicked={res => this.onMonthPicked(res)}
                // onDatePicked={res => this.onDatePicked(res)}
                // onResetDate={res => this.onResetDate(res)}
                // onResetDefaultDate={res => this.onResetDefaultDate(res)}
                // onSecondChange={res => this.onSecondChange(res)}
                // onMinuteChange={res => this.onMinuteChange(res)}
                // onHourChange={res => this.onHourChange(res)}
                // onMeridiemChange={res => this.onMeridiemChange(res)}
                // onResetTime={res => this.onResetTime(res)}
                // onResetDefaultTime={res => this.onResetDefaultTime(res)}
                // onClearTime={res => this.onClearTime(res)}

                size="xs"// 'xs', 's', 'm', 'l'
                mode={1} //0: calendar only, 1: calendar and clock, 2: clock only; default is 0
                locale={`en-us`}// 'en-us' or 'zh-cn'; default is en-us
                show={showPickyDateTime} //default is false
                onClose={() => this.setState({ showPickyDateTime: false })}
                // defaultTime={`${hour}:${minute}:${second} ${meridiem}`} // "HH:MM:SS AM"
                // defaultDate={`${month}/${date}/${year}`} // "MM/DD/YYYY"
                defaultTime={`${hour}:${minute}`} // OPTIONAL. format: "HH:MM:SS AM"
                defaultDate={`${date}/${month}/${year}`} // OPTIONAL. format: "MM/DD/YYYY"
                onYearPicked={res => this.onYearPicked(res)}
                onMonthPicked={res => this.onMonthPicked(res)}
                onDatePicked={res => this.onDatePicked(res)}
                onResetDate={res => this.onResetDate(res)}
                onResetDefaultDate={res => this.onResetDefaultDate(res)}
                onSecondChange={res => this.onSecondChange(res)}
                onMinuteChange={res => this.onMinuteChange(res)}
                onHourChange={res => this.onHourChange(res)}
                onMeridiemChange={res => this.onMeridiemChange(res)}
                onResetTime={res => this.onResetTime(res)}
                onResetDefaultTime={res => this.onResetDefaultTime(res)}
                onClearTime={res => this.onClearTime(res)}
            />
        );
    }

}

export default ManagerCalendar
