import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import userpic from '../../assets/userpic.png'
import { getDatabase, ref, onValue,set, push } from "firebase/database";
import { useSelector } from 'react-redux';


const UserList = () => {
  const data=useSelector(state=>state.userLoginInfo.userInfo);
  console.log(data);
  const db = getDatabase();

  const [userList, setUserList] = useState([])

  useEffect(() => {
    const userRef = ref(db, '/users');
    onValue(userRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        console.log(item.val(), 'item');
        if(data.uid!=item.key){

          arr.push({ ...item.val(),userid:item.key})
        }
        setUserList(arr)
      })
    });
  }, [])

  console.log(userList);


  const handleFriendRequest =(item)=>{
    console.log(item,'item');
    set(push(ref(db, 'friendRequest/')), {
      receivername: item.username,
      receiverid: item.userid,
      sendername: data.displayName,
      senderid: data.uid

    });
  }






  return (
    <div className=' shadow  px-[22px] h-[384px] overflow-y-scroll rounded-lg mt-[30px]'>

      <div className='flex justify-between'>
        <h2 className='font-pops font-semibold text-[20px]'> User List</h2>
        <BsThreeDotsVertical />
      </div>

      <div className='mt-[17px]'>

        {
          userList.map((item) => (

            <div className='flex items-center justify-between border-b-2 pb-[14px]'>
              <img src={userpic} alt="" />
              <div>
                <p className='font-pops text-[18px] font-semibold'>{item.username}</p>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>{item.email}</p>
              </div>

              <div>
                <button onClick={()=>handleFriendRequest(item)} className='bg-primary font-medium text-[20px] text-white px-[30px] rounded'>+</button>
              </div>
            </div>

          ))
        }




      </div>




    </div>
  )
}

export default UserList