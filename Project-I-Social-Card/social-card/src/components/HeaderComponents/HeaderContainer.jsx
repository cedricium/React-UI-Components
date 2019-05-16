import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

const HeaderContainer = () => {
  return (
    <header className="header-container">
      <div className="img-wrapper">
        <ImageThumbnail />
      </div>
      <div className="content-wrapper">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </header>
  )
}

export default HeaderContainer
