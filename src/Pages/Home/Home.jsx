import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Sidebar from '../../components/Sidebar/Sidebar';
import GroupList from '../../components/GroupList/GroupList';
import { userLoginInfo } from '../../slices/userSlice';
import FriendRequest from '../../components/FriendRequest/FriendRequest';
import Friends from '../../components/Friends/Friends';
import MyGroup from '../../components/MyGroup/MyGroup';
import UserList from '../../components/UserList/UserList';
import BlockedUser from '../../components/BlockedUser/BlockedUser';


const Home = () => {
  const auth = getAuth();
  const data = useSelector(state => state.userLoginInfo.userInfo);
  const dispatch = useDispatch()
  console.log(data);

  const [verify, setVerify] = useState(false)

  const navigate = useNavigate()
  useEffect(() => {
    if (!data) {
      navigate('/login')
    }

  }, [])

  onAuthStateChanged(auth, (user) => {
    console.log(user, 'okkkkkk');
    if (user.emailVerified) {
      setVerify(true)
      dispatch(userLoginInfo(user))
      localStorage.setItem('userLoginInfo',JSON.stringify(userLoginInfo(user)))




    }
  });

  return (

    <div>
      {
        verify ?

          <div className='flex'>
            {/* <Sidebar/> */}

            <div className='w-[186px]'>
              <Sidebar/>
            </div>

            <div className='w-[427px] ml-[43px]'>
              <GroupList/>
              <FriendRequest/>
            </div>
            <div className='w-[427px] ml-[43px]'>
              <Friends/>
              <MyGroup/>
            </div>
            <div className='w-[427px] ml-[43px]'>
              <UserList/>
              <BlockedUser/>
            </div>

          </div>
          :

          <div className='h-screen w-full bg-black pt-[80px] text-center'>
            <p className='font-nunito font-bold text-[70px] text-[#11175D] text-[white]'>please verify your gmail</p>
            <button className='bg-red-500 px-[30px] py-[20px] text-[20px] rounded '>
              <Link to='/login'> Back To Login</Link>
            </button>
          </div>

      }
    </div>
  )
}

export default Home