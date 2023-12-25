import React from 'react';

function changeDateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let amPm = "";
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    amPm = hour < 12 ? "오전" : "오후";
    if (hour > 12) {
        hour -= 12;
    }
    hour = hour >= 10 ? hour : '0' + hour;
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;

    return date.getFullYear() + '-' + month + '-' + day + ' ' + amPm + ' ' + hour + ':' + minute;
}

function DateFormat(props) {
    const changeDate = new Date(props.date);
    if (!isNaN(changeDate.getTime()))
        return <>{changeDateFormat(changeDate)}</>
    else
        return <></>;
}

export default DateFormat;