import React from 'react';
import './About.css';
import Hero from './svgs/illustration-hero.svg';

const About = () => {
  return (
    <div className='about'>
      <div className='about_details'>
        <h1>A Simple Bookmark <br /> Manager </h1>
        <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free</p>
        <button>Get it on Chrome</button>
        <button className='button2'>Get it on firefox</button>
      </div>
      <div className='about_img'><img src={Hero} alt="" /></div>
      <div className='special_div'/>
    </div>
  )
}

export default About
