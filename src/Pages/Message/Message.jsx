import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import GroupList from '../../components/GroupList/GroupList'
import Friends from '../../components/Friends/Friends'
import Chat from '../../components/Chat/Chat'

const Message = () => {
  return (
    <div>
           <div className='flex'>

            <div className='w-[186px]'>
              <Sidebar active='msg'/>
            </div>

            <div className='w-[427px] ml-[43px]'>
              <GroupList/>
              {/* <FriendRequest/> */}
              <Friends/>
            </div>
            <div className='w-[690px] ml-[43px]'>
              {/* <Friends/> */}
              {/* <MyGroup/> */}
              <Chat/>
              {/* yo yo */}
            </div>
            <div className='w-[427px] ml-[43px]'>
              {/* <UserList/>
              <BlockedUser/> */}

              Hello honey
            </div>

          </div>
    </div>
  )
}

export default Message