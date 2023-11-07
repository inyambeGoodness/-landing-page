import React, { useState } from 'react';
import './Tabs.css';
import Tablet from './Tablet.js';
import Tablet1 from './svgs/illustration-features-tab-1.svg';
import Tablet2 from './svgs/illustration-features-tab-2.svg';
import Tablet3 from './svgs/illustration-features-tab-3.svg'


const Tabs = () => {
    const [color, setcolor] = useState(1)
    
  return (
    <div className='tabs'>
        <div className="tab_kids">
            <p onClick={()=>{setcolor(1)}} className={(color === 1)?'red_bottom':'tab'}>Simple Bookmarking</p>
            <p onClick={()=>{setcolor(2)}} className={(color === 2)?'red_bottom':'tab'}>Speedy Searching</p>
            <p onClick={()=>{setcolor(3)}} className={(color === 3)?'red_bottom':'tab'}>Easy Sharing</p>
        </div>

        <div className="tabs_details">
            {(color === 1)  && <Tablet image={Tablet1} header={'Bookmark in one click'} text={'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites'} />}
            {  (color === 2)  &&  <Tablet image={Tablet2} header={'Intelligent search'} text={'Our powerful search features will help you find saved sites in no time at all. No need to trawwl through all of your bookmarks'} />}
            {(color === 3)  && <Tablet image={Tablet3} header={'Share your Bookmark'} text={'Easily share your Bookmark and collections with others. Create a shareable link that you can send at the  click of a button'} />}
        </div>

        <div className='special_div2'/>


      
    </div>
  )
}

export default Tabs
