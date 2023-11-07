import React, { createRef } from 'react'
import profile from '../../assets/profile.png'
import { AiOutlineHome, AiOutlineMessage, AiOutlineSetting } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoLogOut } from 'react-icons/io5'

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { BsFillCloudUploadFill } from 'react-icons/bs'
import { useState } from 'react'


import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";





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
    const [imageUploadPopup, setImageUploadPopup] = useState(false)

    const [image, setImage] = useState();
    const [cropData, setCropData] = useState();
    const cropperRef = createRef();


    const handleImageUpload = () => {
        console.log('immggg');
        setImageUploadPopup(true)
    }

    const handlecanceluploadpopup = () => {
        console.log('immggg');
        setImageUploadPopup(false)
    }



    const handleImageChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };








    return (
        <div className='bg-primary h-screen rounded-lg pt-[38px] '>

            <div className='group relative w-[100px] h-[100px] mx-auto '>

                <img src={profile} alt="" className='mx-auto' />
                <div onClick={handleImageUpload} className='opacity-0 group-hover:opacity-100 cursor-pointer bg-overlay rounded-full w-full h-full absolute top-0 left-0 flex justify-center items-center  transition ease-in-out'>

                    <BsFillCloudUploadFill className='text-[30px] text-[white]' />
                </div>
            </div>









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


            {
                imageUploadPopup &&

                <div className='h-screen bg-primary w-full absolute top-0 left-0 z-[999] flex justify-center items-center'>
                    <div className=' bg-white w-[700px] p-[20px]'>

                        <h1 className='font-nunito font-bold text-[50px]  text-primary'>Image Upload </h1>



                        <div className=' w-[100px] h-[100px] rounded-full mx-auto overflow-hidden mb-[20px]'>

                            <div className="img-preview w-[100px] h-[100px] rounded-full"></div>
                        </div>

                        {
                            image &&
                            <Cropper
                                ref={cropperRef}
                                style={{ height: 400, width: "100%" }}
                                zoomTo={0.5}
                                initialAspectRatio={1}
                                preview=".img-preview"
                                src={image}
                                viewMode={1}
                                minCropBoxHeight={10}
                                minCropBoxWidth={10}
                                background={false}
                                responsive={true}
                                autoCropArea={1}
                                checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                                guides={true}
                            />


                        }




                        <input type="file" className='mt-[30px]' onChange={handleImageChange} />

                        <div className='mt-[10px]'>
                            <button className='mt-[20px] rounded bg-primary px-[30px] py-[10px] text-white text-[18px]'>Upload</button>

                            <button onClick={handlecanceluploadpopup} className='mt-[20px] rounded bg-red-500 px-[30px] py-[10px] text-white text-[18px] ml-[20px]'>Cancel</button>
                        </div>


                    </div>
                </div>

            }




        </div>
    )
}

export default Sidebar