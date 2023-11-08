import React, { useState } from 'react'
import login from '../../assets/login.png'
import googleicon from '../../assets/googleicon.png'
import { PiEyeFill, PiEyeClosedDuotone } from 'react-icons/Pi'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { userLoginInfo } from '../../slices/userSlice';



const Login = () => {

    const auth = getAuth();
 
    const dispatch = useDispatch()
    const provider = new GoogleAuthProvider();
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [emailerr, setEmailerr] = useState('')

    const [passworderr, setPassworderr] = useState('')
    const [showPassword, setShowPassword] = useState('')

    const [error, setError] = useState('');
    const navigate = useNavigate()

    const [forgotPassword, setforgotPassword] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailerr('');
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPassworderr('');
    }

    const googleHandleClick = () => {
        setTimeout(() => {
            navigate('/')
        }, 2000);
        signInWithPopup(auth, provider)
            .then(() => {
                console.log('done');
            }).catch((error) => {
                const errorCode = error.Code;
                console.log(errorCode);
            });
    }


    const handleForgotPassword = () => {
        setforgotPassword(true)
    }
    const handlePopUpclick = () => {
        setforgotPassword(false)
    }

    const submitForgotPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
               console.log('Password send');
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                // ..
            });
    }





    const handleClick = () => {
        console.log('ok cool');
        if (!email) {
            setEmailerr('email is required');
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailerr('email is invaled')
            }
        }

        if (!password) {
            setPassworderr('password is required');
        }

        else {
            if (!/("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")/.test(password)) {
                setPassworderr('password is invaled')
            }
        }


        if (email && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    toast.success('login successfully done');
                    console.log(user);

                    dispatch(userLoginInfo(user.user))
                    localStorage.setItem('userLoginInfo',JSON.stringify(userLoginInfo(user)))


                    setTimeout(() => {
                        navigate('/')
                    }, 2000)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode);

                    if (errorCode.includes('auth/invalid-login-credentials')) {
                        setError('please give correct email and password');
                    }

                });

        }

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





    }
    return (
        <div>

            <div className='flex'>

                <div className='w-1/2 flex justify-end'>
                    <div className='mr-[69px] mt-[225px]'>
                        <h1 className='font-nunito font-bold text-[34px] text-[#11175D]'>Login to your account!</h1>


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



                        {/* btn start */}
                        <div className='relative'>
                            <div className=' w-[220px] mt-[29px] border-2 rounded-lg  text-center py-[22px] text-center'>

                                <div className='absolute top-[28px] left-[28px] '>
                                    <img src={googleicon} alt="" />

                                </div>
                                <p onClick={googleHandleClick} className=' items-center font-sans text-[13px] font-semibold text-[#03014C] px-[12px]'>Login with Google</p>
                            </div>

                            <p className='font-nunito font-bold text-[20px] bg-red-500'>
                                {error}
                            </p>


                        </div>



                        <div className='mt-[60px] relative w-96'>
                            <input type="email" onChange={handleEmail} className='w-full border-b-2 outline-none border-[#11175D] py-[26px]  ' />
                            <p className='absolute top-[-9px]  font-nunito font-semibold text-[13px] text-[#1175D] tracking-[1px]  bg-white'>Email Address</p>

                            {
                                emailerr &&
                                <p className='font-nunito font-semibold bg-green-500 p-[8px] rounded mt-[6px]'>{emailerr}</p>
                            }
                        </div>
                        {/* 1st */}

                        {/* 2nd done  */}
                        <div className='mt-[60px] relative w-96'>
                            <input type={showPassword ? 'text' : 'password'} onChange={handlePassword} className='w-full border-b-2 outline-none border-[#11175D] py-[26px]' />
                            <p className='absolute top-[-9px]  font-nunito font-semibold text-[13px] text-[#1175D] tracking-[1px]  bg-white'>Password</p>


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
                            <div onClick={handleClick} className='bg-primary  text-center cursor-pointer py-[20px] text-center rounded'>
                                <p className='font-nunito text-[20px] font-semibold text-white'>Login to Continue</p>
                            </div>
                            <p className='text-center font-sans text-[13px] text-[#03014C] mt-[35px]'>Don’t have an account ?  <span className='font-sans font-bold text-[13px] text-[#EA6C00]'>  <Link to='/registration '>Sign up </Link>  </span> </p>

                            <p onClick={handleForgotPassword} className=' cursor-pointer text-center font-sans text-[13px] text-[#EA6C00] text-[#03014C] mt-[35px]'>Forgot password </p>
                        </div>
                    </div>
                </div>


                {/* image */}
                <div className='w-1/2 '>
                    <img className='w-full h-screen object-cover' src={login} alt="" />
                </div>

            </div>

            {
                forgotPassword &&
                <div className='absolute top-0 left-0 w-full h-screen bg-primary flex justify-center items-center '>
                    <div className='w-1/2 bg-white p-10 rounded '>

                        <h3 className=' font-nunito font-bold text-[34px] text-[#11175D]'>Forgot password</h3>
                        <div className='mt-[60px] relative w-96'>
                            <input type="email" onChange={handleEmail} value={email} className='w-full border-2 border-[#11175D] py-[26px] px-[50px] rounded-lg' />
                            <p className='absolute top-[-9px] left-[32px] font-nunito font-semibold text-[13px] text-[#1175D] tracking-[1px] px-[18px] bg-white'>Email Address</p>

                            {
                                emailerr &&
                                <p className='font-nunito font-semibold bg-green-500 p-[8px] rounded mt-[6px]'>{emailerr}</p>
                            }
                        </div>

                        <div className='flex gap-x-[20px] pt-[30px]'>
                            <div className='w-[160px] bg-green-500  text-center cursor-pointer py-[20px] text-center rounded'>
                                <p onClick={submitForgotPassword} className='font-nunito text-[20px] font-semibold text-white'>Submit</p>
                            </div>

                            <div onClick={handlePopUpclick} className='w-[200px] bg-green-500  text-center cursor-pointer py-[20px] text-center rounded'>
                                <p className='font-nunito text-[20px] font-semibold text-white'> <Link to='/login'>Cancel</Link>  </p>
                            </div>
                        </div>

                    </div>
                </div>

            }


        </div>


    )
}

export default Login