import React, { useState, useEffect } from 'react';

const CircularTimer = () => {
  const totalSeconds = 1200; 
  const [seconds, setSeconds] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= totalSeconds) {
          clearInterval(interval); 
          return prev; 
        }
        return prev + 1; 
      });
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const radius = 45;
  const minStroke = 4; 
  const maxStroke = 12; 
  const normalizedRadius = radius - maxStroke; 
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (seconds / totalSeconds) * circumference;

  const strokeWidth = Math.floor(
    minStroke + (maxStroke - minStroke) * (seconds / totalSeconds)
  );

  const strokeColor = seconds >= totalSeconds ? '#FF6347' : '#38A169'; 

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f8', 
        padding: '20px',
        borderRadius: '50%', 
        width: '120px', 
        height: '120px',
      }}
    >
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke={strokeColor} 
          fill="transparent"
          strokeWidth={strokeWidth} 
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 1s linear, stroke-width 1s linear' }} // Smooth transition
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div
      className='z-10'
        style={{
          position: 'absolute',
          fontSize: '32px',
          color: '#38A169', 
        }}
      >
        {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')} 
      </div>
    </div>
  );
};

export default CircularTimer;
