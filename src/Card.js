import React from 'react';
import './Card.css';
import dots from './svgs/bg-dots.svg'


const Card = ({no,header,img}) => {
  return (
    <div className='card'>
      <img src={img} alt="" />
      <h3>{header}</h3>
      <p>{`Minimum version ${no}`}</p>
      <img src={dots} alt="" />
      <button>Add & install Extension</button>

    </div>
  )
}

export default Card
