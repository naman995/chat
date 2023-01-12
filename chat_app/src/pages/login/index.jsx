import React from 'react'
import InputField from "../../components/inputField";

const Login = () => {
  return (
    <div className="bg-blue-300  flex  h-screen items-center justify-center  w-auto">
      <div className="flex flex-col bg-white rounded-2xl px-20 py-12">
        <form action="Submit" className="flex flex-col items-center w-72">
          <p className="text-purple-700 font-bold text-2xl">Hello Chat</p>
          <p className="text-purple-700 text-sm mt-2">Login</p>
          <InputField type="text" placeholder="Email" />
          <InputField type="password" placeholder="  " />
        </form>
        <button className="bg-purple-400 px-10 py-2 text-white mt-5  font-bold">
          Sign in
        </button>
        <div className="flex items-center mt-2">
          <p className="text-gray-500">You don't have an account ?</p>
          <p className="text-purple-700 text-sm">{"  "}Register</p>
        </div>
      </div>
    </div>
  );
}

export default Login