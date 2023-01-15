import React from "react";
import Sidebar from "../../components/sidebar";
import Chat from "../../components/chat";

const Home = () => {
  return (
    <div className="bg-blue-400 h-screen w-screen flex items-center justify-center ">
      <div className=" h-5/6 w-5/6 bg-purple-200 rounded-xl  ">
        <div className="flex flex-row">
          <div className="h-screen">
            <Sidebar />
          </div>
          <div className="w-[76.75%] ">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
