import React, { useState, useEffect } from 'react';

const DateTaker = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Current Date and Time</h2>
      <p><strong>Date:</strong> {dateTime.toLocaleDateString()}</p>
      <p><strong>Time:</strong> {dateTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default DateTaker;