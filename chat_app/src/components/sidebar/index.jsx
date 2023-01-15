import React from 'react'
import ProfileCard from '../profileCard'
import Search from '../search'
import SidebarHeader from './sidebarHeader'

const SideBar = () => {
  return (
    <div className=' bg-purple-700 rounded-tl-xl  h-5/6 rounded-bl-xl'>
      <SidebarHeader />
      <Search/>
      <ProfileCard />
    </div>
  )
}

export default SideBar
