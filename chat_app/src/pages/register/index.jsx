import React,{useRef} from "react";
import InputField from "../../components/inputField";
import {FcAddImage} from "react-icons/fc";
 

const Register = () => {
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <div className="bg-blue-300  flex  h-screen items-center justify-center  w-auto">
      <div className="flex flex-col bg-white rounded-2xl px-20 py-12">
        <form action="Submit" className="flex flex-col items-center w-72">
          <p className="text-purple-700 font-bold text-2xl">Hello Chat</p>
          <p className="text-purple-700 text-sm mt-2">Register</p>
          <InputField type="text" placeholder="Display Name" />
          <InputField type="email" placeholder="Email" />
          <InputField type="password" placeholder="Password" />
          <div className="flex mt-3 mx-auto  ">
            <FcAddImage size={30} className=" " />
            <input
              ref={hiddenFileInput}
              onChange={handleChange}
              className="hidden "
              type="file"
              placeholder="Add an avatar"
            />

            <button onClick={handleClick} className="ml-2">Add an Avatar</button>
          </div>
        </form>
        <button className="bg-purple-400 px-10 py-2 text-white mt-5  font-bold">
          Sign up
        </button>
        <div className="flex mx-auto items-center mt-2">
          <p className="text-gray-500">You do have an account ?</p>
          <p className="text-purple-700 text-sm">{"  "}Login</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
