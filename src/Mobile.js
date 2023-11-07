import React from 'react';
import './Mobile.css';
import bookmark from './svgs/bookmark.svg';
import facebook from './svgs/icon-facebook.svg';
import twitter from './svgs/icon-twitter.svg';
import { useDispatch } from 'react-redux';
import { unchange } from './features/close';

const Mobile = () => {
    const dispatch = useDispatch()
  return (
    <div className='mobile'>
        <div className='mobile_nav'><img src={bookmark} alt="" /><p onClick={()=>{dispatch(unchange())}}>X</p></div>
        <div className='mobile_menu'>
            <a href="/">FEATURES</a>
            <a href="/">PRICING</a>
            <a href="/">CONTACT</a>
            <a href="/"><button>LOGIN</button></a>
            </div> 
            <div className='icon'><img src={facebook} alt="" /> <img src={twitter} alt="" /></div>
    </div>
  )
}

export default Mobile
