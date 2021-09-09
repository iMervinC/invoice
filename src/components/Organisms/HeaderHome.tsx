import React from 'react'
import Button1 from '../Atoms/Button1'
import { FilterBy } from '@/components/Molecules'

const HeaderHome = () => {
  return (
    <div className="flex justify-between items-center pt-20">
      <div>
        <h1 className="text-4xl font-bold dark:text-white">Invoices</h1>
        <span className="text-xs text-custom-muted font-medium dark:text-custom-accent">
          There are 7 total invoices
        </span>
      </div>
      <FilterBy />
      <Button1 />
    </div>
  )
}

export default HeaderHome
