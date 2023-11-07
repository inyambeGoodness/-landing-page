import React from 'react'
import './Features.css'

const Features = ({header,text}) => {
  return (
    <div className='features'>
        <h2>{header}</h2>
        <p>{text}</p>
      
    </div>
  )
}

export default Features
