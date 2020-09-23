//API endpoint:
//http://api.timezonedb.com/v2.1/list-time-zone?key=JZN77L5UEHBN&format=json

import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const API_KEY = 'JZN77L5UEHBN';

export default function Time (props) {
    const { timeCountry } = props;
    // const [timeData, setTimeData] = useState([]);
    // const [unixTimeStamp, setUnixTimeStamp] = useState();
    // const [timeCountry, setTimeCountry] = useState();

    // useEffect(() => {
    //     axios.get(`http://api.timezonedb.com/v2.1/list-time-zone?key=${API_KEY}&format=json`)
    //         .then(res => {
    //             console.log(res);
    //             setTimeData(res.data);
    //         })
    //         .catch(err => {
    //             console.log("ERROR:", err);
    //         });
    // }, []);

    // const selectCountryTime = timeData => {
    //     let country = timeData.filter(obj => obj.countryCode === "ZA");
    //     console.log("Country:", country);
    //     setUnixTimeStamp(country.timestamp);
    // };

    // //unixTime = Math.floor(Date.now() / 1000);
    // const convertTime = unixTimeStamp => {
    //     let milliseconds = unixTimeStamp * 1000;
    //     let dateObject = new Date(milliseconds);
    //     setTimeCountry(dateObject.toLocaleString());
    // };

    // selectCountryTime(timeData);
    // convertTime(unixTimeStamp);

    return (
        <div>
            <h4>Date and Time in South Africa</h4>
            <p>{timeCountry}</p>
        </div>
    );
}