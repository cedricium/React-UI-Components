import React from 'react'
import './Footer.css'

import {
  MessageCircle,
  RefreshCw,
  Heart,
  Mail,
} from 'react-feather'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="comment icon-wrapper">
        <MessageCircle color="rgb(101, 119, 134)" />
      </div>
      <div className="retweet icon-wrapper">
        <RefreshCw color="rgb(101, 119, 134)" />
        <p>6</p>
      </div>
      <div className="heart icon-wrapper">
        <Heart color="rgb(101, 119, 134)" />
        <p>4</p>
      </div>
      <div className="dm icon-wrapper">
        <Mail color="rgb(101, 119, 134)" />
      </div>
    </footer>
  )
}

export default Footer
