import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import userpic from '../../assets/userpic.png'
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from 'react-redux';

const UserList = () => {
  const data = useSelector(state => state.userLoginInfo.userInfo);
  console.log(data);
  const db = getDatabase();

  const [userList, setUserList] = useState([])
  const [friendRequestList, setFriendRequestList] = useState([])
  const [friendList, setFriendList] = useState([])
  const [searchdata,setSearchdata]=useState('')

  useEffect(() => {
    const userRef = ref(db, '/users');
    onValue(userRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        console.log(item.val(), 'item');
        if (data.uid != item.key) {

          arr.push({ ...item.val(), userid: item.key })
        }
        setUserList(arr)
      })
    });
  }, [])

  const handleFriendRequest = (item) => {
    console.log(item, 'item');
    set(push(ref(db, 'friendRequest/')), {
      receivername: item.username,
      receiverid: item.userid,
      sendername: data.displayName,
      senderid: data.uid

    });
  }

  // friend k click korli ki hobe block abr unblock a click korle friend hbe bujhtasi na========
  const handleFriend = (item) => {
    console.log(item, 'item');
    set(push(ref(db, 'block/')), {
      receivername: item.username,
      receiverid: item.userid,
      sendername: data.displayName,
      senderid: data.uid

    });
  }
// endddddddddddddddd


  useEffect(() => {
    const friendRequestRef = ref(db, '/friendRequest');
    onValue(friendRequestRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        arr.push(item.val().receiverid + item.val().senderid);
      })
      setFriendRequestList(arr)
    });
  }, [])

  console.log(friendRequestList);


  useEffect(() => {
    const friendRef = ref(db, '/friend');
    onValue(friendRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        arr.push(item.val().receiverid + item.val().senderid);
      })
      setFriendList(arr)
    });
  }, [])

  const handleSearch=(e)=>{
console.log(e.target.value);
let arr=[]
  if(e.target.value.length==0){
    setSearchdata([])
  }else{
    userList.filter((item)=>{
      if(item.username.toLowerCase().includes(e.target.value.toLowerCase())){
        arr.push(item)
        setSearchdata(arr)
      }
    })
  }


  }

  return (
    <div className=' shadow  px-[22px] h-[384px] overflow-y-scroll rounded-lg mt-[30px]'>
 
      <div className='flex justify-between'>
        <h2 className='font-pops font-semibold text-[20px]'> User List</h2>
        <BsThreeDotsVertical />
      </div>

      <div className='fixed flex items-center '>
        <input onChange={handleSearch} type="text" className=' border border-primary py-[10px] px-[40px] outline-none rounded-full cursor-pointer' />
        <button className='bg-primary py-[10px] px-[30px]  ml-[-56px] border-none text-[20px] rounded-full text-white'>search</button>
      </div>
   
      <div className='mt-[60px]'>

        {
          searchdata.length > 0 ?
          searchdata.map((item) => (

            <div className='flex items-center justify-between border-b-2 pb-[14px]'>
              <img src={userpic} alt="" />
              <div>
                <p className='font-pops text-[18px] font-semibold'>{item.username}</p>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>{item.email}</p>
              </div>
           

              {

                friendList.includes(item.userid + data.uid) ||
                friendList.includes(data.uid + item.userid)
                ?
                <div>
                <button onClick={()=>handleFriend(item)} className='bg-primary font-medium text-[20px] text-white px-[30px] rounded'>Friend</button>
              </div>
            

              :
              
              
              friendRequestList.includes(item.userid + data.uid) ||
              friendRequestList.includes(data.uid + item.userid)
              ?
              <div>
                <button className='bg-primary font-medium text-[20px] text-white px-[30px] rounded'>Pending</button>
              </div>
              :
              <div>
                <button onClick={() => handleFriendRequest(item)} className='bg-primary font-medium text-[20px] text-white px-[30px] rounded'>+</button>
              </div>


              }
             
            </div>

          ))
          :
          userList.map((item) => (

            <div className='flex items-center justify-between border-b-2 pb-[14px]'>
              <img src={userpic} alt="" />
              <div>
                <p className='font-pops text-[18px] font-semibold'>{item.username}</p>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>{item.email}</p>
              </div>
           

              {

                friendList.includes(item.userid + data.uid) ||
                friendList.includes(data.uid + item.userid)
                ?
                <div>
                <button onClick={()=>handleFriend(item)} className='bg-primary font-medium text-[20px] text-white px-[30px] rounded'>Friend</button>
              </div>
            

              :
              
              
              friendRequestList.includes(item.userid + data.uid) ||
              friendRequestList.includes(data.uid + item.userid)
              ?
              <div>
                <button className='bg-primary font-medium text-[20px] text-white px-[30px] rounded'>Pending</button>
              </div>
              :
              <div>
                <button onClick={() => handleFriendRequest(item)} className='bg-primary font-medium text-[20px] text-white px-[30px] rounded'>+</button>
              </div>


              }
             
            </div>

          ))
        }




      </div>




    </div>
  )
}

export default UserList