/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { Logo, ThemeToggle, Avatar } from '@/components/Molecules'

export const Bar: NextPage = () => {
  return (
    <div className="bg-custom-dark-grey sm:rounded-tr-2xl sm:rounded-br-2xl fixed flex sm:flex-col justify-between sm:h-screen w-full sm:w-[108px] top-0">
      <Logo />
      <ThemeToggle />
      <Avatar />
    </div>
  )
}
