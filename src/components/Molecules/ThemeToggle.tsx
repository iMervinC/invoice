import { useState, useEffect } from 'react'

export const ThemeToggle = () => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark')
  }, [toggle])

  return (
    <div
      role="button"
      className="flex justify-center items-center sm:w-full ml-auto pr-[24px] sm:pr-0 sm:mt-auto sm:pb-[28px] border-r-2 sm:border-b-2 sm:border-r-0  border-solid border-custom-grey"
      onClick={() => setToggle((_toggle) => !_toggle)}
    >
      {toggle ? (
        <img src="/assets/icon-sun.svg" alt="sun" />
      ) : (
        <img src="/assets/icon-moon.svg" alt="moon" />
      )}
    </div>
  )
}
