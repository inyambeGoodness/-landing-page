import React from 'react';
import './FlexBoxes.css';
import Card from './Card';
import firefox from './svgs/logo-firefox.svg';
import opera from './svgs/logo-opera.svg';
import chrome from './svgs/logo-chrome.svg'


const FlexBoxes = () => {
  return (
    <div className='flexboxes'>
      <div className='flexbox_1'>
            <Card no={62} header={'Add to Chrome'} img={chrome} />
      </div>
      <div className='flexbox_2'>
            <Card no={55} header={'Add to Firefox'} img={firefox} />
      </div>
      <div className='flexbox_3'>
            <Card no={46} header={'Add to Opera'} img={opera} />
      </div>
    </div>
  )
}

export default FlexBoxes
