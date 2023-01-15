import React from "react";
import ChatHeader from "../chatHeader";
import { FriendChats, ClientChat, InputField } from "../chats";

const Chat = () => {
  return (
    <>
      <div className="  h-5/6 ">
        <div className="bg-purple-600  w-full rounded-tr-xl">
          <ChatHeader />
        </div>
        <div className="overflow-auto h-5/6">
          <FriendChats />
          <ClientChat />
        </div>
        <div className="mt-1.5">
          <InputField />
        </div>
      </div>
    </>
  );
};

export default Chat;
