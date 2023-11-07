import React, { useRef } from 'react';
import './Footer.css'

const Footer = () => {
    const emailRef = useRef('')
  return (
    <div className='footer'>

      <div className="footer_details">
          <p>35,000 ALREADY JOINED</p>
          <h2>Stay up-to-date with that we're doing</h2>
          <div><input ref={emailRef} type="email" name="" id=""  placeholder='Enter your email address'/><button>Contact Us</button></div>
      </div>
    </div>
  )
}

export default Footer
