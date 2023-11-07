import React from 'react';
import './Nav.css';
import bookmarkLogo from './svgs/logo-bookmark.svg';
import Ham from './svgs/icon-hamburger.svg';
import { useDispatch } from 'react-redux';
import {change } from './features/close'


const Nav = () => {
    const dispatch = useDispatch()
  return (
    <nav className='nav'>
        <div className="log"><img src={bookmarkLogo} alt="" /></div>
        <div className="menu">
            <a href="/">FEATURES</a>
            <a href="/">PRICING</a>
            <a href="/">CONTACT</a>
            <a href="/"><button>LOGIN</button></a>
        </div>
        <img onClick={()=>{dispatch(change())}} className='ham_burger' src={Ham} alt="" />
      
    </nav>
  )
}

export default Nav
