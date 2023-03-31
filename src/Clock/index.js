function Clock({ house, minute, second }) {
    return (
        <div className="clock__time">
            <div className="clock-face">
                <div className="dot"></div>
                <div ref={house} className="clock-face__hour"></div>
                <div ref={minute} className="clock-face__minute"></div>
                <div ref={second} className="clock-face__second"></div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
            </div>
        </div>
    );
}

export default Clock;
