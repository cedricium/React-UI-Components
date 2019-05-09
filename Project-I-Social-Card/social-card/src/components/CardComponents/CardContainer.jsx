import React from 'react';
import './Card.css';

import CardBanner from './CardBanner'
import CardContent from './CardContent'

const CardContainer = () => {
  const handleClick = () => {
    window.location.assign('https://www.reactjs.org')
  }
  return (
    <main className="card-container" onClick={handleClick}>
      <div className="card-wrapper">
        <CardBanner />
        <CardContent />
      </div>
    </main>
  )
}

export default CardContainer
