import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import userpic from '../../assets/userpic.png'
import { getDatabase, ref, onValue, set, push, remove,  } from "firebase/database";
import { useSelector } from 'react-redux';

const Friends = () => {

  const data = useSelector(state => state.userLoginInfo.userInfo);
  console.log(data);
  const db = getDatabase();
  const [friendList, setFriendList] = useState([])

  useEffect(() => {
    const friendRef = ref(db, '/friend');
    onValue(friendRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if(data.uid==item.val().receiverid || data.uid== item.val().senderid){
          arr.push({...item.val(),key:item.key});
        }
      })
      setFriendList(arr)
    });
  }, [])

  const handleBlock=(item)=>{
    console.log(item);

    if(data.uid==item.senderid){
      set(push(ref(db,'block/')),{
          block:item.receivername,
          blockid:item.receiverid,

          blockby:item.sendername,
          blockbyid:item.senderid
      }).then(()=>{
        remove(ref(db,'friend/'+item.key))
      })


    }else{
      set(push(ref(db,'block/')),{
        block:item.sendername,
        blockid:item.senderid,
        blockby:item.receivername,
        blockbyid:item.receiverid
    }).then(()=>{
      remove(ref(db,'friend/'+item.key))
    })
    }
  }

  return (


    <div className=' shadow  px-[22px] h-[384px] overflow-y-scroll rounded-lg mt-[30px]'>

      <div className='flex justify-between'>
        <h2 className='font-pops font-semibold text-[20px]'>Friends</h2>
        <BsThreeDotsVertical />
      </div>

      <div className='mt-[17px]'>
        {
          friendList.map((item)=>(
        <div className='flex items-center justify-between border-b-2 pb-[14px]'>
          <img src={userpic} alt="" />

          <div>
            <p className='font-pops text-[18px] font-semibold'>
              {

                  item.receiverid== data.uid? item.sendername:item.receivername
            }
            </p>

            <p className='text-[14px] font-medium text-[#4D4D4DBF]'>Hi Guys, Wassup!</p>
          </div>

          <div>
            <button onClick={()=>handleBlock(item)} className='bg-primary font-medium text-[20px] text-white px-[10px] rounded'>Block</button>
          </div>
        </div>

          ))
        }



      </div>




    </div>
  )
}

export default Friends