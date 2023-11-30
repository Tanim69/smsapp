import React from 'react'
import chatpic from '../../assets/chatpic.png'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdEmojiEmotions } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { BsFillSendCheckFill } from "react-icons/bs";
import { BsFillTriangleFill } from "react-icons/bs";

import smsbox from '../../assets/smsbox.jpg'
import smsbox1 from '../../assets/smsbox1.jpg'

import ModalImage from "react-modal-image";


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
            <div className='overflow-y-scroll h-[700px] px-[10px]'>

                {/* Receiver sms start */}
                <div className='grid justify-items-start'>
                    <div className='relative bg-[#F1F1F1] px-[55px] py-[15px] rounded-lg mt-[56px]  w-[45%]'>
                        {/* <img src={smsbox} alt="" /> */}
                        <ModalImage
                            small={smsbox}
                            large={smsbox}
                            alt="Hello World!"
                        />;
                        <BsFillTriangleFill className='absolute bottom-0 left-[-4px] text-[#F1F1F1]' />
                    </div>
                    <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:01pm</p>

                </div>

                {/* Receiver sms end */}

                {/* Sender sms start */}
                <div className="grid justify-items-end">

                    <div className='relative bg-primary px-[55px] py-[15px] rounded-lg mt-[20px] w-[45%] '>
                        {/* <img src={smsbox1} alt="" /> */}

                        <ModalImage
                            small={smsbox1}
                            large={smsbox1}
                            alt="secenery"
                        />;


                        <BsFillTriangleFill className='absolute bottom-0 right-[-4px] text-primary' />
                    </div>
                    <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:02pm</p>
                </div>
                {/* sender sms end */}

                {/* Receiver sms start */}
                <div className='grid justify-items-start'>
                    <div className='relative bg-[#F1F1F1] px-[55px] py-[15px] rounded-lg mt-[56px]  w-[45%]'>
                        <p>
                            Hey there!
                        </p>
                        <BsFillTriangleFill className='absolute bottom-0 left-[-4px] text-[#F1F1F1]' />
                    </div>
                    <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:01pm</p>

                </div>

                {/* Receiver sms end */}

                {/* Sender sms start */}
                <div className="grid justify-items-end">

                    <div className='relative bg-primary px-[55px] py-[15px] rounded-lg mt-[20px] w-[45%] '>
                        <p>
                            Hello dear Lorem
                        </p>
                        <BsFillTriangleFill className='absolute bottom-0 right-[-4px] text-primary' />
                    </div>
                    <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:02pm</p>
                </div>
                {/* sender sms end */}


                {/* Receiver sms start */}
                <div className='grid justify-items-start'>
                    <div className='relative bg-[#F1F1F1] px-[55px] py-[15px] rounded-lg mt-[56px]  w-[45%]'>
                        <p>
                            Hey there!
                        </p>
                        <BsFillTriangleFill className='absolute bottom-0 left-[-4px] text-[#F1F1F1]' />
                    </div>
                    <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:01pm</p>

                </div>

                {/* Receiver sms end */}

                {/* Sender sms start */}
                <div className="grid justify-items-end">

                    <div className='relative bg-primary px-[55px] py-[15px] rounded-lg mt-[20px] w-[45%] '>
                        <p>
                            Hello dear Lorem
                        </p>
                        <BsFillTriangleFill className='absolute bottom-0 right-[-4px] text-primary' />
                    </div>
                    <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Today,02:02pm</p>
                </div>
                {/* sender sms end */}




            </div>























            <div className=' flex gap-x-[20px] border-t-2 border-red-500  '>

                <div className='flex w-full mt-[10px]'>
                    <input type="text" className='bg-red-300 h-[45px] w-full rounded  flex justify-end outline-none p-5' />
                    <div className='flex  items-center gap-x-[12px]'>
                        <MdEmojiEmotions className='text-[30px] ' />
                        <CiCamera className='text-[30px] mr-[15px]' />
                    </div>
                    <div className='bg-primary h-[45px] w-[45px] rounded flex items-center grid        justify-items-stretch'>
                        <BsFillSendCheckFill className='text-[25px] text-[white] justify-self-center ' />
                    </div>

                </div>
            </div>







            {/* end chatting........................ */}


        </div>
    )
}

export default Chat