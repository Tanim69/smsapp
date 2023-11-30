import React from 'react'
import chatpic from '../../assets/chatpic.png'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdEmojiEmotions } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { BsFillSendCheckFill } from "react-icons/bs";
import { BsFillTriangleFill } from "react-icons/bs";


const Chat = () => {
    return (
        <div className=''>

            <div className='flex items-center justify-between  border-b-2 pb-[14px]  '>
                <div className='flex items-center'>
                    <img className='pt-[24px] pr-[33px]' src={chatpic} alt="" />
                    <div>
                        <p className='font-pops text-[18px] font-semibold'>Swathi</p>
                        <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Online</p>
                    </div>
                </div>
                <div className='flex justify-between '>
                    <BsThreeDotsVertical className='text-[25px]  ' />
                </div>
            </div>


            {/* start chatting............. */}
<div className='overflow-y-scroll h-[500px] px-[10px]'>
    
             <div className='grid justify-items-start'>
                <div className='relative bg-[#F1F1F1] px-[55px] py-[15px] rounded-lg mt-[56px]  w-[45%]'>
                    <p>
                    Hey there! 
                    </p>
                    <BsFillTriangleFill className='absolute bottom-0 left-[-4px] text-[#F1F1F1]' />
                </div>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:01pm</p>

               </div>




             <div className="grid justify-items-end">

                <div className='relative bg-primary px-[55px] py-[15px] rounded-lg mt-[20px] w-[45%] '>
                    <p>
                    Hello dear Lorem 
                    </p>
                    <BsFillTriangleFill className='absolute bottom-0 right-[-4px] text-primary' />
                </div>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:02pm</p>
              </div>



              <div className='grid justify-items-start'>
                <div className='relative bg-[#F1F1F1] px-[55px] py-[15px] rounded-lg mt-[56px]  w-[45%]'>
                    <p>
                    Hey there! 
                    </p>
                    <BsFillTriangleFill className='absolute bottom-0 left-[-4px] text-[#F1F1F1]' />
                </div>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:01pm</p>

               </div>




             <div className="grid justify-items-end">

                <div className='relative bg-primary px-[55px] py-[15px] rounded-lg mt-[20px] w-[45%] '>
                    <p>
                    Hello dear Lorem 
                    </p>
                    <BsFillTriangleFill className='absolute bottom-0 right-[-4px] text-primary' />
                </div>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:02pm</p>
              </div>


              <div className='grid justify-items-start'>
                <div className='relative bg-[#F1F1F1] px-[55px] py-[15px] rounded-lg mt-[56px]  w-[45%]'>
                    <p>
                    Hey there! 
                    </p>
                    <BsFillTriangleFill className='absolute bottom-0 left-[-4px] text-[#F1F1F1]' />
                </div>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:01pm</p>

               </div>




             <div className="grid justify-items-end">

                <div className='relative bg-primary px-[55px] py-[15px] rounded-lg mt-[20px] w-[45%] '>
                    <p>
                    Hello dear Lorem 
                    </p>
                    <BsFillTriangleFill className='absolute bottom-0 right-[-4px] text-primary' />
                </div>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:02pm</p>
              </div>

              <div className='grid justify-items-start'>
                <div className='relative bg-[#F1F1F1] px-[55px] py-[15px] rounded-lg mt-[56px]  w-[45%]'>
                    <p>
                    Hey there! 
                    </p>
                    <BsFillTriangleFill className='absolute bottom-0 left-[-4px] text-[#F1F1F1]' />
                </div>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:01pm</p>

               </div>




             <div className="grid justify-items-end">

                <div className='relative bg-primary px-[55px] py-[15px] rounded-lg mt-[20px] w-[45%] '>
                    <p>
                    Hello dear Lorem 
                    </p>
                    <BsFillTriangleFill className='absolute bottom-0 right-[-4px] text-primary' />
                </div>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:02pm</p>
              </div>






</div>


















            {/* <div>

                <div className='bg-[#F1F1F1] px-[55px] py-[15px] rounded-[20px] mt-[20px]'>I am doing well. Can we meet up tomorrow?</div>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:13pm</p>

            </div>


            <div className='grid justify-items-end'>


                <div className='bg-primary px-[55px] py-[15px] rounded-[20px] mt-[20px] grid justify-items-end flex'>Sure!</div>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:14pm</p>
            </div>




            <div className=' flex mt-[47px] gap-x-[20px]  '>

                <div className='bg-[#F1F1F1] h-[45px] w-full rounded  flex justify-end'>

                  <div className='flex  items-center gap-x-[12px]'>
                  <MdEmojiEmotions className='text-[30px] ' />
                    <CiCamera className='text-[30px] mr-[15px]' />
                  </div>
                </div>
                <div className='bg-primary h-[45px] w-[45px] rounded flex items-center grid justify-items-stretch'>
                <BsFillSendCheckFill  className='text-[25px] text-[white] justify-self-center ' />
                </div>

            </div> */}




            {/* end chatting........................ */}


        </div>
    )
}

export default Chat