import React from 'react'

export const Avatar = () => {
  return (
    <div className="flex justify-center items-center w-24 sm:w-full sm:h-[88px]">
      <img
        className="h-10 w-10 sm:h-10 sm:w-10 rounded-full"
        src="/assets/image-avatar.jpg"
        alt="avatar"
      />
    </div>
  )
}
