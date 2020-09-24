//API endpoint:
//http://api.timezonedb.com/v2.1/list-time-zone?key=JZN77L5UEHBN&format=json

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
const API_KEY = 'JZN77L5UEHBN';

const useStyles = makeStyles({
    timeBlock: {
        textAlign: 'center',
    },
});

export default function Time () {
    //Style
    const classes = useStyles();
    //Time states
    const [unixTimeStamp, setUnixTimeStamp] = useState();

    //useEffect and Axios
    useEffect(() => {
        axios
            .get(`http://api.timezonedb.com/v2.1/list-time-zone?key=${API_KEY}&format=json`)
            .then(res => {
                setUnixTimeStamp(res.data.zones[203].timestamp);

            })
            .catch(err => {
                console.log("ERROR:", err);
            });
      }, [unixTimeStamp]);

    //SK 1600931035 [422]
    //ZA 1600905835
    //KE [203]

    const convertTime = unixTimeStamp => {
        let milliseconds = (unixTimeStamp * 1000) + (3600000 * 5); //3600000
        let dateObject = new Date(milliseconds);
        let timeCountry = dateObject.toLocaleString();
        return (timeCountry);
    };

    let timeCountry = convertTime(unixTimeStamp);

    return (
        <div className = {classes.timeBlock}>
            <h4>Date and Time in Kenya</h4>
            <p>{timeCountry? timeCountry : null}</p>
        </div>
    );
}