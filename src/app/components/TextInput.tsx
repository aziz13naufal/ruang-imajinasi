import React from 'react'

const TextInput = ({type = 'text', name, id, value, placeholder, onChange, className}: any) => {
    return (
        <input 
          type={type} 
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className={`w-full border border-[#cecfd1] px-2 outline-none focus:border-blue-600 focus:shadow-inner py-1 ${className}`} />
  )
}
export default TextInput
