import React from 'react';
import './Tablet.css'

const Tablet = ({image,header,text}) => {
  return (
    <div className='tablet'>
        <div className='tablet_image'><img src={image} alt="" /></div>
        <div className='tablet_details'>
            <h2>{header}</h2>
            <p>{text}</p>
            <button>More info</button>
        </div>
      
    </div>
  )
}

export default Tablet
