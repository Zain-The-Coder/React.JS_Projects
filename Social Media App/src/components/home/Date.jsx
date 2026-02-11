import React, { useState, useEffect } from 'react';

const DateTaker = () => {
  // Initialize state with the current date/time
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the state every second
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
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