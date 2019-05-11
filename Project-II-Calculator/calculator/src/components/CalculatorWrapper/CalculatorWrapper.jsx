import React from 'react'
import './CalculatorWrapper.css'

import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay'
import ActionButton from '../ButtonComponents/ActionButton'
import NumberButton from '../ButtonComponents/NumberButton'

const CalculatorWrapper = () => {
  return (
    <div className="calculator-wrapper">
      <CalculatorDisplay text="0" />
      <div className="calculator-body">
        <div className="number-pad">
          <div className="row">
            <NumberButton text="clear" />
          </div>
          <div className="row">
            <NumberButton text="7" />
            <NumberButton text="8" />
            <NumberButton text="9" />
          </div>
          <div className="row">
            <NumberButton text="4" />
            <NumberButton text="5" />
            <NumberButton text="6" />
          </div>
          <div className="row">
            <NumberButton text="1" />
            <NumberButton text="2" />
            <NumberButton text="3" />
          </div>
          <div className="row">
            <NumberButton text="0" />
          </div>
        </div>
        <div className="action-pad">
          <div className="row">
            <ActionButton text="%" />
          </div>
          <div className="row">
            <ActionButton text="*" />
          </div>
          <div className="row">
            <ActionButton text="-" />
          </div>
          <div className="row">
            <ActionButton text="+" />
          </div>
          <div className="row">
            <ActionButton text="=" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculatorWrapper
