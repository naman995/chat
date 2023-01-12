import React from 'react'
import Chat from '../chat'
import Search from '../search'
import SidebarHeader from './sidebarHeader'

const SideBar = () => {
  return (
    <div className='w-1/4 bg-purple-700 rounded-tl-xl absolute h-5/6 rounded-bl-xl'>
      <SidebarHeader />
      <Search/>
      <Chat/>
    </div>
  )
}

export default SideBar
