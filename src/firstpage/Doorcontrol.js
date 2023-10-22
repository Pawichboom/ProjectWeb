import React, { useState, useEffect } from 'react';
import './DoorControl.css';

const DoorControl = () => {
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate initial API call to get door status (replace with actual call)
    simulateApiCall();
  }, []);

  const toggleDoor = () => {
    if (!isLoading) {
      setIsLoading(true);
      // Simulate API call to toggle the door status
      simulateApiCall(!isDoorOpen);
    }
  };

  const simulateApiCall = (newState) => {
    // Simulate API call (replace this with actual API call)
    // If newState is not provided, assume it's fetching the current state
    const endpoint = newState ? 'open' : 'close'; // Adjust endpoint accordingly
    fetch(`your-api-endpoint/${endpoint}`, {
      method: 'POST', // or 'PUT' or 'PATCH' depending on your API
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isOpen: newState }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsDoorOpen(data.isOpen);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="door-control-container">
      <h1 className="door-control-title">ระบบควบคุมประตู</h1>
      <button
        className={`door-control-button ${isDoorOpen ? 'open' : 'close'}`}
        onClick={toggleDoor}
      >
        {isLoading ? 'กำลังประมวลผล...' : isDoorOpen ? 'เปิด' : 'ปิด'}
      </button>
      <p className="door-status">สถานะ: {isDoorOpen ? 'เปิด' : 'ปิด'}</p>
    </div>
  );
};

export default DoorControl;
