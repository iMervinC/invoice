import React from 'react'

export const Logo = () => {
  return (
    <div
      className="relative flex justify-center items-center bg-custom w-[80px] sm:w-full  h-[80px] sm:h-[108px] rounded-r-2xl 
    
    before:absolute before:bg-custom-secondary before:w-full before:h-1/2 before:z-0 before:bottom-0 before:rounded-br-2xl before:rounded-tl-2xl"
    >
      <img
        className=" w-[24px] h-[24px] z-10 sm:w-[40px] sm:h-[40px]"
        src="/assets/logo.svg"
        alt="logo"
      />
    </div>
  )
}
