import React, { useState } from "react";
import "./Clock.css";

export default function Clock() {
  const [hrStyle, setHrStyle] = useState({});
  const [minStyle, setMinStyle] = useState({});
  const [secStyle, setSecStyle] = useState({});
  setInterval(() => {
    const deg = 6;
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    setHrStyle({ transform: `rotateZ(${hh + mm / 12}deg)` });
    setMinStyle({ transform: `rotateZ(${mm}deg)` });
    setSecStyle({ transform: `rotateZ(${ss}deg)` });
  }, 1);
  return (
    <div className="ClockBody">
      <div className="Clock">
        <div className="hour">
          <div className="hr" id="hr" style={hrStyle}></div>
        </div>
        <div className="minute" style={minStyle}>
          <div className="min" id="min"></div>
        </div>
        <div className="seconds">
          <div className="sec" id="sec" style={secStyle}></div>
        </div>
      </div>
    </div>
  );
}
