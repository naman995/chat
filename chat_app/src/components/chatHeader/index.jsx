import React from "react";
import { AiTwotoneVideoCamera } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
const ChatHeader = () => {
  const userName = "userName";
  return (
    <>
      <div className="w-full h-14 flex justify-between items-center ">
        <p className="text-xl ml-2 text-white">{userName}</p>
        <div className="flex text-white mr-4">
          <AiTwotoneVideoCamera size={20} className="text-2xl" />
          <BsFillPersonPlusFill size={20} className="text-2xl ml-2" />
          <FiMoreHorizontal size={20} className="text-2xl ml-2" />
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
