import React from 'react'

const Button = ({content, className}: any) => {
  return (
    <button className={`h-fit rounded-md bg-blue-500 text-white px-4 py-2 drop-shadow text-sm outline-none ${className}`}>{content}</button>
  )
}

export default Button
