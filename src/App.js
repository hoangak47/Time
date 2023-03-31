import { Button, DatePicker, TimePicker } from 'antd';
import { useRef, useState } from 'react';
import '~/App.scss';
import Clock from './Clock';
import Time from './Time';

function App() {
    const date = new Date();
    const [hour, setHour] = useState(date.getHours());
    const [minute, setMinute] = useState(date.getMinutes());
    const [second, setSecond] = useState(date.getSeconds());

    const [open, setOpen] = useState(false);

    useState(() => {
        setInterval(() => {
            const date = new Date();
            setHour(date.getHours());
            setMinute(date.getMinutes());
            setSecond(date.getSeconds());
        }, 1000);
    }, [hour, minute, second]);

    let hourDeg = hour < 12 ? hour * 30 + minute * 0.5 : (hour - 12) * 30 + minute * 0.5;
    let minuteDeg = minute * 6;
    let secondDeg = second * 6;

    const face__hour = useRef();
    const face__minute = useRef();
    const face__second = useRef();

    if (face__hour.current !== undefined && face__minute.current !== undefined && face__second.current !== undefined) {
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
