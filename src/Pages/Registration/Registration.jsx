import React, { useState } from 'react'
import registration from '../../assets/registration.png'
import { PiEyeFill, PiEyeClosedDuotone } from 'react-icons/Pi'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';


const Registration = () => {

    const auth = getAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')

    const [emailerr, setEmailerr] = useState('')
    const [fullNameerr, setFullNameerr] = useState('')
    const [passworderr, setPassworderr] = useState('')
    const [showPassword, setShowPassword] = useState('')



    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailerr('')
    }
    const handleFullName = (e) => {
        setFullName(e.target.value);
        setFullNameerr('')
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPassworderr('')
    }

    const handleClick = () => {
        // console.log('ok cool');
        if (!email) {
            setEmailerr('email is required');
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailerr('email is invaled')
            }
        }

        if (!fullName) {
            setFullNameerr('fullName is required');
        }
        if (!password) {
            setPassworderr('password is required');
        }

        // else{
        //     if(!/("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")/.test(password)){
        //         setPassworderr('password is invaled')
        //     }
        // }


        // else if (!/(?=.*[a-z])/.test(password)) {
        //     setPassworderr('at least one lowercase')
        // }
        // else if (!/(?=.*[A-Z])/.test(password)) {
        //     setPassworderr('at least one uppercase')
        // }
        // else if (!/(?=.*[0-9])/.test(password)) {
        //     setPassworderr('at least one number')
        // }
        // else if (!/(?=.*[!@#$%^&*])/.test(password)) {
        //     setPassworderr('at least one special character')
        // }
        // else if (!/(?=.{8,})/.test(password)) {
        //     setPassworderr('The string must be 8 characters or longer')
        // }


        if (email && fullName && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {

            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {


                    sendEmailVerification(auth.currentUser)
                        .then(() => {

                            toast.success('registration done.please verify your email');

                            setEmail('')
                            setFullName('')
                            setPassword('')
                            setTimeout(() => {
                                navigate('/login')
                            }, 2000);

                        });


                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log('errorCode');
                    if (errorCode.includes(errorCode)) {
                        setEmailerr('Email is already taken');
                    }
                });
        }
    }
    return (
        <div className='flex'>

            <div className='w-1/2 flex justify-end'>
                <div className='mr-[69px] mt-[225px]'>
                    <h1 className='font-nunito font-bold text-[34px] text-[#11175D]'>Get started with easily register</h1>
                    <p className='font-nunito text-[20px] text-[#808080]'>Free register and you can enjoy it</p>

                    {/* {
                        success &&
                        <p className='font-nunito text-[20px] text-white bg-red-500 w-96 p-[8px] rounded mt-[6px]'>{success}</p>
                    } */}


                    < ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />

                    <div className='mt-[60px] relative w-96'>
                        <input type="email" onChange={handleEmail} value={email} className='w-full border-2 border-[#11175D] py-[26px] px-[50px] rounded-lg' />
                        <p className='absolute top-[-9px] left-[32px] font-nunito font-semibold text-[13px] text-[#1175D] tracking-[1px] px-[18px] bg-white'>Email Address</p>

                        {
                            emailerr &&
                            <p className='font-nunito font-semibold bg-green-500 p-[8px] rounded mt-[6px]'>{emailerr}</p>
                        }
                    </div>
                    {/* 1st */}
                    <div className='mt-[60px] relative w-96'>
                        <input type="text" onChange={handleFullName} value={fullName} className='w-full border-2 border-[#11175D] py-[26px] px-[50px] rounded-lg' />
                        <p className='absolute top-[-9px] left-[32px] font-nunito font-semibold text-[13px] text-[#1175D] tracking-[1px] px-[18px] bg-white'>Full Name</p>
                        {
                            fullNameerr &&
                            <p className='font-nunito font-semibold bg-green-500 p-[8px] rounded mt-[6px]'>{fullNameerr}</p>
                        }
                    </div>
                    {/* 2nd done  */}
                    <div className='mt-[60px] relative w-96'>
                        <input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePassword} className='w-full border-2 border-[#11175D] py-[26px] px-[50px] rounded-lg' />
                        <p className='absolute top-[-9px] left-[32px] font-nunito font-semibold text-[13px] text-[#1175D] tracking-[1px] px-[18px] bg-white'>Password</p>


                        {
                            passworderr &&
                            <p className='font-nunito font-semibold bg-green-500 p-[8px] rounded mt-[6px]'>{passworderr}</p>
                        }
                        {
                            showPassword ?
                                <PiEyeFill onClick={() => setShowPassword(!showPassword)} className='absolute top-[20px] right-[-154px] text-[34px] w-96' />
                                :
                                <PiEyeClosedDuotone onClick={() => setShowPassword(!showPassword)} className='absolute top-[20px] right-[-154px] text-[34px] w-96' />
                        }

                    </div>
                    {/* 3rd done */}

                    <div className='mt-[50px] w-96'>
                        <div onClick={handleClick} className='bg-primary  text-center cursor-pointer py-[20px] text-center rounded-full'>
                            <p className='font-nunito text-[20px] font-semibold text-white'>Sign up</p>
                        </div>
                        <p className='text-center font-sans text-[13px] text-[#03014C] mt-[35px]'>Already  have an account ? <span className='font-sans font-bold text-[13px] text-[#EA6C00]'> <Link to='/login'> Sign In</Link></span> </p>
                    </div>
                </div>
            </div>


            {/* image */}
            <div className='w-1/2 '>
                <img className='w-full h-screen object-cover' src={registration} alt="" />
            </div>


        </div>
    )
}

export default Registration