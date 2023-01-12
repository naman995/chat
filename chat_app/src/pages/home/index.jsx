import React from 'react'
import Sidebar from '../../components/sidebar'

const Home = () => {
  return (
    <div className="bg-blue-400 h-screen w-screen  grid place-items-center ">
      <div className=" h-5/6 w-5/6 bg-white rounded-xl">
        <div className="">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Home
