import { useState } from "react"


const Sidebar = ({padding , test}) => {
  
  return (
    <div className='sidebar'>
        <div className='scrollArrowBox'
          style={{
            paddingTop:padding
          }}
        >
            <img src="/images/ScrollArrow.png" alt="" />
        </div>
        <div className='scrollLineBox'>
          <a className='scrollingBox' href='#AboutUs' onClick={()=>test('7vh')}></a>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <a className='scrollingBox' href='#Group' onClick={()=>test('25vh')}></a>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <a className='scrollingBox' href='#Services' onClick={()=>test('42.5vh')}></a>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <a className='scrollingBox' href='#Prices' onClick={()=>test('60vh')}></a>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <div className='scrollingRoad'></div>
          <a className='scrollingBox' href='#ContactUs' onClick={()=>test('77.7vh')}></a>
        </div>
    </div>
  )
}

export default Sidebar