import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [time, setTime] = useState(0);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    !valid &&
      setTimeout(() => {
        time > 0 && setTime(time - 1);
      }, 1000);
    valid && setTime(0);
  }, [time]);

  function decreamentCount(e) {
    if (e.key === "Enter") {
      // console.log(isNaN(e.target.value));
      if (isNaN(e.target.value) || e.target.value == 0) {
        setValid(true);
      } else {
        setValid(false);
        setTime(Math.floor(e.target.value));
      }
    }
  }

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
      <div id="current-time">{valid ? 0 : time /* remaining time */}</div>
    </div>
  );
};

export default App;
