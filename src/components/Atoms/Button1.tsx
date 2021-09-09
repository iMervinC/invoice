import React from 'react'

const Button1 = () => {
  return (
    <button className="flex p-2 rounded-full items-center justify-center bg-custom text-xs font-bold text-white">
      <img
        className="rounded-full p-3 bg-white mr-4"
        src="/assets/icon-plus.svg"
        alt="plus"
      />
      New Invoice
    </button>
  )
}

export default Button1
