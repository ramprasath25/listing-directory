import React from 'react';
import { Link } from 'react-router-dom';
let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
const BusinessHours = (businessHours) => {
    let currentDateTime = new Date();
    let day = weekday[currentDateTime.getDay()];

    let timings_data = Object.keys(businessHours.data).map((item, index) => {
        let openClass = (item == day) ? 'atbd_open atbd_today' : 'atbd_open';
        let businesstime = businessHours.data[item].split('-');
        let morningTime = (businesstime[0].split(':')[0] <= 12) ? businesstime[0] + ' AM' : businesstime[0] + ' PM';
        let eveningTime = ((businesstime[1].split(':')[0] % 12) >= 12) ? businesstime[1].split(':')[0] % 12 + ':' + businesstime[1].split(':')[1] + ' AM' : businesstime[1].split(':')[0] % 12 + ':' + businesstime[1].split(':')[1] + ' PM'

        return (
            <li className={openClass} key={index}>
                <span className="day">{item}</span>
                <div className="atbd_open_close_time">
                    <span className="time">{`${morningTime} - ${eveningTime}`}</span>
                </div>
            </li>
        )
    })
    return (
        <div className="widget atbd_widget widget-card">
            <div className="atbd_widget_title">
                <h4><span className="la la-clock-o"></span> Business Hours</h4>
                <span className="badge badge-success">Open Now</span>
            </div>
            <div className="directory_open_hours">
                <ul>
                    {timings_data}
                </ul>
            </div>
        </div>
    )
}
export default BusinessHours