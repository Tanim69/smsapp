import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import userpic from '../../assets/userpic.png'
import { getDatabase, ref, onValue, set, push, remove,  } from "firebase/database";
import { useSelector } from 'react-redux';

const BlockedUser = () => {

  const data = useSelector(state => state.userLoginInfo.userInfo);
  console.log(data);
  const db = getDatabase();

  const [blockList, setBlockList] = useState([])

  useEffect(() => {
    const blockRef = ref(db, '/block');
    onValue(blockRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {

     if(item.val().blockbyid=data.uid){
      arr.push({
        id:item.key,
        block:item.val().block,
        blockid:item.val().blockid,
      })
     }else if(item.val().blockid=data.uid){
      arr.push({
        id:item.key,
        blockby:item.val().blockby,
        blockbyid:item.val().blockbyid,
      })
     }
      })
      setBlockList(arr)
    });
  }, [])

  const handleUnblock=(item)=>{
        console.log(item);

        
  }









  return (


    <div className='shadow  px-[22px] h-[460px] overflow-y-scroll rounded-lg mt-[30px]'>

      <div className='flex justify-between'>
        <h2 className='font-pops font-semibold text-[20px]'>Blocked Users</h2>
        <BsThreeDotsVertical />
      </div>

      <div className='mt-[17px]'>
{

  blockList.map((item)=>(
    
    <div className='flex items-center justify-between border-b-2 pb-[14px]'>
    <img src={userpic} alt="" />


    <div>
      <p className='font-pops text-[18px] font-semibold'>{item.block}</p>
      <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Hi Guys, Wassup!</p>
    </div>

    <div>
      <button onClick={()=>handleUnblock(item)} className='bg-primary font-medium text-[20px] text-white px-[10px] rounded'>Unblock</button>
    </div>
  </div>

  ))
}




      </div>

      </div>


  )
}

export default BlockedUser