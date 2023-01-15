import React from "react";
import Image from "../../assets/R.jfif";
import { BsPaperclip } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";

const FriendChats = () => {
  return (
    <div className="m-2 flex ">
      <div>
        <img className="w-8 h-8 rounded-full" src={Image} alt="profile pic" />
        <p className="text-[12px] text-gray-400">Just Now</p>
      </div>
      <div className="bg-white w-auto max-w-[45%] text-black ml-4 px-4 flex items-center rounded-b-xl rounded-tr-xl">
        <p className="text-sm ">
          vczzvzxvzxvvzxcvcxczvvmm m m m m m mmkmkkkmkm
        </p>
      </div>
    </div>
  );
};

const ClientChat = () => {
  return (
    <div className="m-2 flex flex-row-reverse ">
      <div>
        <img className="w-8 h-8 rounded-full" src={Image} alt="profile pic" />
        <p className="text-[12px] text-gray-400">Just Now</p>
      </div>
      <div className="bg-blue-400 w-auto max-w-[45%] text-black mr-4 px-4 flex items-center rounded-b-xl rounded-tl-xl">
        <p className="text-sm ">
          vczzvzxvzxvvzxcvcxczvvmm m m m m m mmkmkkkmkm
        </p>
      </div>
    </div>
  );
};

const InputField = () => {
  return (
    <div className="bg-white h-12 flex justify-between items-center rounded-br-xl ">
      <input
        className=" w-[70%] overflow-auto outline-none mx-4 placeholder:text-gray-500 placeholder:pl-2"
        type="text"
        placeholder="Type something..."
      />
      <div className="flex mr-8 items-center rounded-lg">
        <BsPaperclip className="text-gray-400 text-2xl mx-2" />
        <BiImageAdd className="text-gray-400 text-2xl mx-2" />
        <button className="bg-blue-400 px-2 py-1 text-white">Send</button>
      </div>
    </div>
  );
};

export { FriendChats, ClientChat, InputField };
