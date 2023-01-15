import React from "react";
import Profile_Img from "../../../assets/R.jfif"
const SidebarHeader = () => {
  const user ="Naman Rajput";
  return (
    <div className="flex justify-between bg-purple-900 h-14 items-center rounded-tl-xl">
      <div className="ml-2">
        <p className="text-purple-200 font-bold">Hello Chat</p>
      </div>
      <div className="flex">
        <img className="w-6 rounded-full ml-2" src={Profile_Img} alt="" />
        <p className="text-purple-200 ml-2">{user}</p>
        <button className="text-purple-200 text-[12px] bg-purple-600 mx-2 px-2 rounded-lg">Logout</button>
      </div>
    </div>
  );
};

export default SidebarHeader;
