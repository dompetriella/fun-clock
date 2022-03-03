import React, { useState, useEffect } from 'react';
import './clock.css';

function DigClock(props) {

    const [time, setTime] = useState()
    const [date, setDate] = useState()
    const [dayCycle, setDayCycle] = useState(true)

    useEffect(() => {
        setInterval(() => {
            const dateObj = new Date()
            setTime(dateObj.toLocaleTimeString('en-US', {hour12: dayCycle}))
            setDate(dateObj.toLocaleDateString('en-US'))
        }, 1000)
    })

    return (
        <div>
            <div className='button-container'>
                <div className='cycle-button'>
                    {dayCycle ? '12' : '24'}
                </div>
                <div className='color-button-container'>
                    <div className='color-button light'>
                    </div>

                    <div className='color-button dark'>
                    </div>

                    <div className='color-button space'>
                    </div>
                </div>
            </div>

            <div className="clock-face-container">
                <div className="clock-time">{time}</div>
            </div>
            <div className="date-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill='blue' d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM328.1 304.1C338.3 295.6 338.3 280.4 328.1 271C319.6 261.7 304.4 261.7 295 271L200 366.1L152.1 319C143.6 309.7 128.4 309.7 119 319C109.7 328.4 109.7 343.6 119 352.1L183 416.1C192.4 426.3 207.6 426.3 216.1 416.1L328.1 304.1z"/>
                    </svg>
                <div className='date-text'>{date}</div>
            </div>
        </div>

    )

}

export default DigClock;

