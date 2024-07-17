import React, { useState } from 'react';
import '/workspaces/react-hello-mich-florez-traffic-light/src/styles/styles.css'; 

export const TrafficLight = () => {
      const [color, setColor] = useState('red');
    
      const handleClick = (newColor) => {
        setColor(newColor);
      };
    
      return (
        <div id="trafficTop">
          <div id="container">
            <div
              className={`red light ${color === 'red' ? 'active' : ''}`}
              onClick={() => handleClick('red')}
            ></div>
            <div
              className={`yellow light ${color === 'yellow' ? 'active' : ''}`}
              onClick={() => handleClick('yellow')}
            ></div>
            <div
              className={`green light ${color === 'green' ? 'active' : ''}`}
              onClick={() => handleClick('green')}
            ></div>
          </div>
         
        </div>
      );
    };
    
    