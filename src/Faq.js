import React, { useState } from 'react';
import arrow from './svgs/icon-arrow.svg';
import './Faq.css'

const Faq = ({question,answer}) => {
    const [showAns, setshowAns] = useState(false)
  return (
    <>
    <div className='question'>
      <p onClick={()=>setshowAns(true)} >{question}</p> { showAns ? <img className='rotate'  onClick={()=>setshowAns(false)} src={arrow} alt="" />: <img onClick={()=>setshowAns(true)} src={arrow} alt="" />}
    </div>
    {showAns && (<div className=' answer'>
      <p>{answer}</p> 
    </div>)}
    
    </>
  )
}

export default Faq
