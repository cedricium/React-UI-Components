import React from 'react';
import './Card.css';

import CardBanner from './CardBanner'
import CardContent from './CardContent'

const CardContainer = () => {
  return (
    <main className="card-container">
      <div className="card-wrapper">
        <CardBanner />
        <CardContent />
      </div>
    </main>
  )
}

export default CardContainer
