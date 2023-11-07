import React from 'react';
import './Faqs.css';
import Faq from './Faq.js'

const Faqs = () => {
  return (
    <div className='faqs'>
        <Faq question={'What is Bookmark ?'} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dicta molestiae tempora, quos soluta amet non explicabo illo voluptas alias vel vitae ducimus neque quaerat nostrum harum necessitatibus reprehenderit unde!'}/>
        <Faq question={'How can i request a new browser?'} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dicta molestiae tempora, quos soluta amet non explicabo illo voluptas alias vel vitae ducimus neque quaerat nostrum harum necessitatibus reprehenderit unde!'}/>
        <Faq question={'Is there a mobile app?'} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dicta molestiae tempora, quos soluta amet non explicabo illo voluptas alias vel vitae ducimus neque quaerat nostrum harum necessitatibus reprehenderit unde!'}/>
        <Faq question={'What about other chromium browsers?'} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dicta molestiae tempora, quos soluta amet non explicabo illo voluptas alias vel vitae ducimus neque quaerat nostrum harum necessitatibus reprehenderit unde!'}/>
        <button>More Info</button>
    </div>
  )
}

export default Faqs
