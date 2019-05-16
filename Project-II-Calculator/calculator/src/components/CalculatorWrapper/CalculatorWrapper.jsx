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
            <NumberButton buttonStyle="button light" text="clear" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="button light" text="7" />
            <NumberButton buttonStyle="button light" text="8" />
            <NumberButton buttonStyle="button light" text="9" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="button light" text="4" />
            <NumberButton buttonStyle="button light" text="5" />
            <NumberButton buttonStyle="button light" text="6" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="button light" text="1" />
            <NumberButton buttonStyle="button light" text="2" />
            <NumberButton buttonStyle="button light" text="3" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="button light" text="0" />
          </div>
        </div>
        <div className="action-pad">
          <div className="row">
            <ActionButton buttonStyle="button primary" text="%" />
          </div>
          <div className="row">
            <ActionButton buttonStyle="button primary" text="x" />
          </div>
          <div className="row">
            <ActionButton buttonStyle="button primary" text="-" />
          </div>
          <div className="row">
            <ActionButton buttonStyle="button primary" text="+" />
          </div>
          <div className="row">
            <ActionButton buttonStyle="button primary" text="=" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculatorWrapper
