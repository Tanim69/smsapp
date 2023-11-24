import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import userpic from '../../assets/userpic.png'
import { getDatabase, onValue, push, ref, set } from 'firebase/database'
import { useSelector } from 'react-redux'

const GroupList = () => {

  const data = useSelector(state => state.userLoginInfo.userInfo);
  console.log(data);
  const db = getDatabase();

  const [grouplist, setgrouplist] = useState([])
  // const [gpListPopup, setGpLIistPopup] = useState(false)
  const [groupname, setgroupname] = useState('')
  const [grouptagline, setgrouptagline] = useState('')


  const [show, setShow] = useState(false)
  const handleGroupCreatePopup = () => {

    // setGpLIistPopup(true)

    setShow(!show)
  }

  const handleCreateGroup = () => {

    set(push(ref(db, 'mygroup/')), {
      groupname: groupname,
      grouptagline:grouptagline,
      adminname:data.displayName,
      adminid:data.uid,
    })
  }

 

  useEffect(() => {
    const mygroupRef = ref(db, '/mygroup');
    onValue(mygroupRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if(data.uid !=item.val().adminid){
          arr.push(item.val());

        }

      })
      setgrouplist(arr)
    });
  }, [])


  return (


    <div className=' shadow  px-[22px] h-[384px] overflow-y-scroll rounded-lg mt-[30px]'>

      <div className='flex justify-between'>
        <h2 className='font-pops font-semibold text-[20px]'> Group List</h2>



        {/* ===============problem ======================= */}

        {/* {
          gpListPopup &&
          <div className='h-[400px] bg-primary w-[800px] absolute top-[30%] left-[20%] z-[999] flex justify-center items-center'>

          </div>
        }  */}


        {/* ====================problem================ */}






        {

          show ?

            <button onClick={handleGroupCreatePopup} className='bg-red-500 p-3 text-white rounded-lg'>Go back</button>

            :
            <button onClick={handleGroupCreatePopup} className='bg-primary p-3 text-white rounded-lg'>Create Group</button>
        }
      </div>

      <div className='mt-[17px]'>



        {
          show ?
            <div className='mt-5 bg-red-300 h-[240px] w-[100%] p-[20px]'>
              <input onChange={(e) => setgroupname(e.target.value)} type="text" placeholder='Group Name' className='w-full p-3 border-2 outline-none border-[#11175D] rounded-lg' />
              <input onChange={(e) => setgrouptagline(e.target.value)} type="text" placeholder='Group Tag Name' className='w-full mt-5 p-3 border-2 outline-none border-[#11175D] rounded-lg' />
              <button onClick={handleCreateGroup} className='text-white bg-primary py-[10px] w-[100%] text-[18px] mt-5 rounded'>Create Group</button>

            </div>
            :
           <>
           {
            grouplist.map((item)=>(
              <div className='flex items-center justify-between border-b-2 pb-[14px]'>
              <img src={userpic} alt="" />
              <div>

              <h5>{item.adminname}</h5>
                <p className='font-pops text-[18px] font-semibold'>{item.groupname}</p>
                <p className='text-[14px] font-medium text-[#4D4D4DBF]'>{item.grouptagline}</p>
              </div>

              <div>
                <button className='bg-primary font-medium text-[20px] text-white px-[30px] rounded'>Join</button>
              </div>
            </div>

            ))
           }
           </>
        }



      </div>




    </div>
  )
}

export default GroupList