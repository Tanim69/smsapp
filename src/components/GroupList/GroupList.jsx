import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import userpic from '../../assets/userpic.png'

const GroupList = () => {
  return (


    <div className=' shadow  px-[22px]'>

      <div className='flex justify-between'>
        <h2 className='font-pops font-semibold text-[20px]'> Group List</h2>
        <BsThreeDotsVertical />
      </div>

<div className='mt-[17px]'>
<div className='flex items-center justify-between border-b-2 pb-[14px]'>
        <img src={userpic} alt="" />


      <div>
        <p className='font-pops text-[18px] font-semibold'>Friends Reunion</p>
        <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Hi Guys, Wassup!</p>
      </div>

      <div>
        <button className='bg-primary font-medium text-[20px] text-white px-[30px] rounded'>Join</button>
      </div>
      </div>

      <div className='flex items-center justify-between border-b-2 pb-[14px]'>
        <img src={userpic} alt="" />


      <div>
        <p className='font-pops text-[18px] font-semibold'>Friends Reunion</p>
        <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Hi Guys, Wassup!</p>
      </div>

      <div>
        <button className='bg-primary font-medium text-[20px] text-white px-[30px] rounded'>Join</button>
      </div>
      </div>


      <div className='flex items-center justify-between border-b-2'>
        <img src={userpic} alt="" />


      <div>
        <p className='font-pops text-[18px] font-semibold'>Friends Reunion</p>
        <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Hi Guys, Wassup!</p>
      </div>

      <div>
        <button className='bg-primary font-medium text-[20px] text-white px-[30px] rounded'>Join</button>
      </div>
      </div>

</div>
     



    </div>
  )
}

export default GroupList