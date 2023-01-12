import React from 'react'

const InputField = ({type,placeholder}) => {
  return (
    <input
      placeholder={placeholder}
      autoComplete={false}
      type={type}
      className="w-60 border-b-2 mt-5 border-gray-300 "
    />
  );
}

export default InputField
