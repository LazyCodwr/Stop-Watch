import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const getMinutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const getHours = `0${Math.floor((time / 3600000) % 24)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div className='hero'>
      <h1 style={{ fontSize: '4em', fontWeight: 'bold' }}>{formatTime(time)}</h1>
      <div>
        <button style={{ fontSize: '1.5em', margin: '0.5em' }} onClick={handleStart}>Start</button>
        <button style={{ fontSize: '1.5em', margin: '0.5em' }} onClick={handleStop}>Stop</button>
        <button style={{ fontSize: '1.5em', margin: '0.5em' }} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
