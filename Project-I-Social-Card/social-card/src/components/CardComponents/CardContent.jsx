import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="content-wrapper">
      <p className="primary title">Get Started with React</p>
      <p className="body">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <p className="secondary url">reactjs.org</p>
    </div>
  )
}

export default CardContent
