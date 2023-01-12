import React from "react";
import Profile_Img from "../../assets/R.jfif";

const Chat = () => {
  const userName = "UserName";
  const message = "This is the message";
  return (
    <div> 
    <div className="bg-purple-700 flex items-center py-2  h-5/6">
      <div>
        <img
          className="rounded-full w-12 aspect-square mx-2"
          src={Profile_Img}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <p className="text-purple-200 text-base font-bold">{userName}</p>
        <p className="text-purple-200 text-sm text-clip "> {message}</p>
      </div>
    </div>
    </div>
  );
};

export default Chat;
