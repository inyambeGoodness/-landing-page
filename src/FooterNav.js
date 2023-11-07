import React from 'react';
import './FooterNav.css';
import bookmarkLogo from './svgs/bookmark.svg';
import twitter from './svgs/icon-twitter.svg';
import facebook from './svgs/icon-facebook.svg'


const FooterNav = () => {
  return (
    <div className='footerNav'>
      <div className='menu'><a href="/"><img src={bookmarkLogo} alt="" /></a>
      <a href="/">FEATURES</a><a href="/">PRICING</a><a href="/">CONTACT</a>
      </div>
      <div className='icon'><img src={facebook} alt="" /> <img src={twitter} alt="" /></div>
    </div>
  )
}

export default FooterNav
