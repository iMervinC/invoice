import { useState } from 'react'
import { RadioFilter } from '../Atoms'

export const FilterBy = () => {
  const [status, setStatus] = useState(false)
  const [filter, setFilter] = useState<'draft' | 'pending' | 'paid'>('draft')

  return (
    <>
      <div
        className="relative font-bold text-sm ml-auto mr-10 dark:text-white cursor-pointer"
        onClick={() => setStatus((s) => !s)}
      >
        Filter by status
        <img
          className="inline-block ml-4"
          src="/assets/icon-arrow-down.svg"
          alt="arrow down"
        />
        {status && <RadioFilter filter={filter} setFilter={setFilter} />}
      </div>
    </>
  )
}
