function Time({ hour, minute, second }) {
    return (
        <div className="time">
            <div className="time__hour">{hour}</div>
            <div className="time__colon">:</div>
            <div className="time__minute">{minute < 10 ? `0${minute}` : minute}</div>
            <div className="time__colon">:</div>
            <div className="time__second">{second < 10 ? `0${second}` : second}</div>
        </div>
    );
}

export default Time;
