import React from 'react'
import './CalculatorWrapper.css'

import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay'
import ActionButton from '../ButtonComponents/ActionButton'
import NumberButton from '../ButtonComponents/NumberButton'

const CalculatorWrapper = () => {
  return (
    <div className="calculator-wrapper">
      <CalculatorDisplay />
      <div className="calculator-body">
        <div className="number-pad">
          <div className="row">
            <NumberButton />
          </div>
          <div className="row">
            <NumberButton />
            <NumberButton />
            <NumberButton />
          </div>
          <div className="row">
            <NumberButton />
            <NumberButton />
            <NumberButton />
          </div>
          <div className="row">
            <NumberButton />
          </div>
        </div>
        <div className="action-pad">
          <div className="row">
            <ActionButton />
          </div>
          <div className="row">
            <ActionButton />
          </div>
          <div className="row">
            <ActionButton />
          </div>
          <div className="row">
            <ActionButton />
          </div>
          <div className="row">
            <ActionButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculatorWrapper
