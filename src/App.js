import { Button, DatePicker, TimePicker } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';
import '~/App.scss';
import Clock from './Clock';
import Time from './Time';

function App() {
    const date = new Date();
    const [hour, setHour] = useState(date.getHours());
    const [minute, setMinute] = useState(date.getMinutes());
    const [second, setSecond] = useState(date.getSeconds());

    const API_key = '439d4b804bc8187953eb36d2a8c26a02';
    const City = 'Bangkok';
    useMemo(() => {
        fetch(`https://openweathermap.org/data/2.5/weather?q=${City}&appid=${API_key}`)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log('Không tìm thấy thành phố'));
    }, [City]);

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setHour(date.getHours());
            setMinute(date.getMinutes());
            setSecond(date.getSeconds());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    let hourDeg = hour < 12 ? hour * 30 + minute * 0.5 : (hour - 12) * 30 + minute * 0.5;
    let minuteDeg = minute * 6;
    let secondDeg = second * 6;

    const face__hour = useRef();
    const face__minute = useRef();
    const face__second = useRef();

    if (face__hour.current && face__minute.current && face__second.current) {
        face__hour.current.style.transform = `translate(-50%, -50%) rotate(${hourDeg}deg)`;
        face__minute.current.style.transform = `translate(-50%, -50%) rotate(${minuteDeg}deg)`;
        face__second.current.style.transform = `translate(-50%, -50%) rotate(${secondDeg}deg)`;
    }

    return (
        <div className="App">
            <div className="clock">
                <Clock house={face__hour} minute={face__minute} second={face__second} />

                <Time hour={hour} minute={minute} second={second} />
            </div>
        </div>
    );
}

export default App;
