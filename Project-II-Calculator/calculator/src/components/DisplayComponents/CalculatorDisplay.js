import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
  return (
    <div className="calculator-display">
      <span className="text">{props.text}</span>
    </div>
  )
}

export default CalculatorDisplay
