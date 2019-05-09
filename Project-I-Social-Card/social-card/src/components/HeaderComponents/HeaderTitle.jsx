import React from 'react';
import './Header.css';
import dayjs from 'dayjs'

const HeaderTitle = () => {
  return (
    <div className="title-wrapper">
      <p className="primary">Lambda School</p>
      <p className="secondary">
        <span className="username">@LambdaSchool</span>{` `}&middot;{` `}
        <span className="date">{ dayjs().format('MMM D') }</span>
      </p>
    </div>
  )
}

export default HeaderTitle
