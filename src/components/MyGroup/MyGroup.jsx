import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import userpic from '../../assets/userpic.png'
import { useSelector } from 'react-redux';
import { getDatabase, onValue, ref } from 'firebase/database';

const MyGroup = () => {


  const data = useSelector(state => state.userLoginInfo.userInfo);
  console.log(data);
  const db = getDatabase();

  const [mygroup, setMyGroup] = useState([])

  useEffect(() => {
    const mygroupRef = ref(db, '/mygroup');
    onValue(mygroupRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if(data.uid==item.val().adminid){
          arr.push(item.val());

        }

      })
      setMyGroup(arr)
    });
  }, [])




  return (


    <div className='shadow  px-[22px] h-[460px] overflow-y-scroll rounded-lg mt-[30px]'>

      <div className='flex justify-between'>
        <h2 className='font-pops font-semibold text-[20px]'>My Groups</h2>
        <BsThreeDotsVertical />
      </div>

      <div className='mt-[17px]'>
     {

      mygroup.map((item)=>(
        <div className='flex items-center justify-between border-b-2 pb-[14px]'>
        <img src={userpic} alt="" />
        <div>
          <h5>{item.adminname}</h5>
          <p className='font-pops text-[18px] font-semibold'>{item.groupname}</p>
          <p className='text-[14px] font-medium text-[#4D4D4DBF]'>{item.grouptagline}</p>
        </div>
      </div>

      ))
     }
     
     

      </div>




    </div>
  )
}

export default MyGroup