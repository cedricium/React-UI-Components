import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="title-wrapper">
      <p className="primary">Lambda School</p>
      <p className="secondary">
        <span className="username">@LambdaSchool</span>{` `}&middot;{` `}
        <span className="date">26 Jan</span>
      </p>
    </div>
  )
}

export default HeaderTitle
