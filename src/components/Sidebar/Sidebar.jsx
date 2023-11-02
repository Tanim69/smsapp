import React from 'react'
import profile from '../../assets/profile.png'
import { AiOutlineHome, AiOutlineMessage, AiOutlineSetting } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoLogOut } from 'react-icons/io5'

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {
    const auth = getAuth();
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log('done');


            setTimeout(() => {
                navigate('/login')
            }, 2000)


        }).catch((error) => {
            console.log(error.code);
        });
    }
    return (
        <div className='bg-primary h-screen rounded-lg pt-[38px] '>
            <img src={profile} alt="" className='mx-auto' />

            <div className='relative bg-white mt-[78px] ml-[25px] py-[20px] rounded-l-lg '>

                <div className='bg-primary absolute top-[0px] right-[0px] h-full w-[8px] rounded-l-lg'></div>

                <AiOutlineHome className='mx-auto text-5xl text-primary' />
            </div>

            <div className='mt-[78px]'>
                <AiOutlineMessage className='mx-auto text-5xl text-[#BAD1FF]' />
            </div>

            <div className='mt-[78px]'>
                <IoIosNotificationsOutline className='mx-auto text-5xl text-[#BAD1FF]' />
            </div>

            <div className='mt-[78px]'>
                <AiOutlineSetting className='mx-auto text-5xl text-[#BAD1FF]' />
            </div>
            <div className='mt-[78px]'>
                <IoLogOut onClick={handleSignOut} className='mx-auto text-5xl text-[#BAD1FF]' />
            </div>


        </div>
    )
}

export default Sidebar