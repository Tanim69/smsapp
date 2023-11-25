import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import userpic from '../../assets/userpic.png'
import { getDatabase, ref, onValue, set, push, remove, } from "firebase/database";
import { useSelector } from 'react-redux';


const FriendRequest = () => {

  const data = useSelector(state => state.userLoginInfo.userInfo);
  console.log(data);
  const db = getDatabase();

  const [friendRequestList, setFriendRequestList] = useState([])

  useEffect(() => {
    const friendRequestRef = ref(db, '/friendRequest');
    onValue(friendRequestRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (item.val().receiverid == data.uid) {
          arr.push({ ...item.val(), id: item.key })

        }

      })
      setFriendRequestList(arr)
    });
  }, [])



  console.log(friendRequestList);


  const handleFriend = (item) => {
    console.log(item);
    set(push(ref(db, 'friend/')), {
      ...item
    }).then(() => {
      remove(ref(db, 'friendRequest/' + item.id))
    })
  }

  return (


    <div className='shadow  px-[22px] h-[460px] overflow-y-scroll rounded-lg mt-[30px]'>

      <div className='flex justify-between'>
        <h2 className='font-pops font-semibold text-[20px]'>Friend  Request</h2>
        <BsThreeDotsVertical />
      </div>

      <div className='mt-[17px]'>
        {
          friendRequestList.length== 0 ? 
          <h1 className='bg-green-200 text-red-600'>No data Available </h1>
          :

          friendRequestList.map((item) => (

            <div className='flex items-center justify-between border-b-2 pb-[14px]'>
              <img src={userpic} alt="" />


              <div>
                <p className='font-pops text-[18px] font-semibold'>{item.sendername}</p>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Hi Guys, Wassup!</p>
              </div>

              <div>
                <button onClick={() => handleFriend(item)} className='bg-primary font-medium text-[20px] text-white px-[30px] rounded'>Accept</button>
              </div>
            </div>

          ))

        }







      </div>




    </div>
  )
}

export default FriendRequest