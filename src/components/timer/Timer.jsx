import React, { useState, useEffect } from 'react';

const CircularTimer = () => {
  const totalSeconds = 1200; // Total time in seconds
  const [seconds, setSeconds] = useState(0); // Current seconds count

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

  const radius = 35; // Reduce the radius to make it smaller
  const minStroke = 3; // Minimum stroke width
  const maxStroke = 8; // Maximum stroke width
  const normalizedRadius = radius - maxStroke; 
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (seconds / totalSeconds) * circumference;

  const strokeWidth = Math.floor(
    minStroke + (maxStroke - minStroke) * (seconds / totalSeconds)
  );

  const strokeColor = seconds >= totalSeconds ? '#FF6347' : '#38A169'; // Color changes after completion

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', 
        width: '90px', // Smaller width for compact design
        height: '90px', // Smaller height for compact design
        borderRadius: '80%', 
        backgroundColor: '#f0f4f8',
      }}
    >
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke={strokeColor} 
          fill="transparent"
          strokeWidth={strokeWidth} 
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 1s linear, stroke-width 1s linear' }} 
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div
        className="z-10"
        style={{
          position: 'absolute',
          fontSize: '18px', // Adjust the font size for compact design
          color: '#38A169', 
        }}
      >
        {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}
      </div>
    </div>
  );
};

export default CircularTimer;
