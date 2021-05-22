import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      time > 0 && setTime(time - 1);
    }, 1000);
  }, [time]);

  const decreamentCount = (e) => {
    if (e.key === "Enter") {
      // console.log(isNaN(e.target.value));
      if (isNaN(e.target.value)) {
        setTime(0);
      } else {
        setTime(Math.floor(e.target.value));
      }
    }
  };

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={decreamentCount /* callback function */}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{time /* remaining time */}</div>
    </div>
  );
};

export default App;
