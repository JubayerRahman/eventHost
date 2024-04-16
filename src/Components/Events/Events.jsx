import React from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'

const Events = () => {
  return (
    <div className='flex flex-col items-center mt-[50px]'>
      <h1 className='font-[600] text-[48px] leading-[58.09px]'>Events</h1>
      <div className="links flex gap-5 mt-[20px] mb-[20px]">
        <p className='font-[400] text-[20px] leading-[24px] hover:bg-[#7342F9] hover:text-white p-[10px] rounded-2xl cursor-pointer'>All</p>
        <p className='font-[400] text-[20px] leading-[24px] hover:bg-[#7342F9] hover:text-white p-[10px] rounded-2xl cursor-pointer'>For you</p>
        <p className='font-[400] text-[20px] leading-[24px] hover:bg-[#7342F9] hover:text-white p-[10px] rounded-2xl cursor-pointer'>This Day</p>
        <p className='font-[400] text-[20px] leading-[24px] hover:bg-[#7342F9] hover:text-white p-[10px] rounded-2xl cursor-pointer'>This Week</p>
        <p className='font-[400] text-[20px] leading-[24px] bg-[#7342F9] text-white p-[10px] rounded-2xl cursor-pointer'>Music</p>
        <p className='font-[400] text-[20px] leading-[24px] hover:bg-[#7342F9] hover:text-white p-[10px] rounded-2xl cursor-pointer'>union</p>
      </div>
      <div className="box grid grid-cols-3 gap-5">
        <Box1/>
        <Box2/>
        <Box3/>
      </div>
    </div>
  )
}

export default Events
