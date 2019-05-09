import React from 'react';
import './Card.css';

import CardBanner from './CardBanner'
import CardContent from './CardContent'

const CardContainer = () => {
  return (
    <main className="card-container">
      <CardBanner />
      <CardContent />
    </main>
  )
}

export default CardContainer
