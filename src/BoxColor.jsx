import React from 'react';


const BoxColor = ({ r, g, b }) => {
    // Create the RGB color string
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
  
    // Define the inline styles for the box
    const boxStyle = {
      backgroundColor: rgbColor,
      padding: '20px',
      textAlign: 'center',
      color: 'white',
      border: '1px solid black',
      margin: '10px 0',
    };
  
    return (
      <div style={boxStyle}>
        {rgbColor}
      </div>
    );
  };
  
  export default BoxColor;