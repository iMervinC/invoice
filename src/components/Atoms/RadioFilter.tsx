import { NextPage } from 'next'
import { Dispatch, SetStateAction, useEffect } from 'react'

interface RadioFilterT {
  filter: 'draft' | 'pending' | 'paid'
  setFilter: Dispatch<SetStateAction<'draft' | 'pending' | 'paid'>>
}

export const RadioFilter: NextPage<RadioFilterT> = ({ filter, setFilter }) => {
  useEffect(() => {
    console.log(filter)
  }, [filter])

  return (
    <form
      className="absolute bg-white text-black w-full p-6 space-y-2 rounded-2xl shadow-md top-9"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="cursor-pointer">
        <input
          type="radio"
          name="filter"
          id="draft"
          value="draft"
          onChange={(e) => setFilter('draft')}
          checked={filter === 'draft'}
        />
        <label className="cursor-pointer" htmlFor="draft">
          Draft
        </label>
      </div>
      <div className="cursor-pointer">
        <input
          type="radio"
          name="filter"
          id="pending"
          value="pending"
          onChange={(e) => setFilter('pending')}
          checked={filter === 'pending'}
        />
        <label className="cursor-pointer" htmlFor="pending">
          Pending
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="filter"
          id="paid"
          value="paid"
          onChange={(e) => setFilter('paid')}
          checked={filter === 'paid'}
        />
        <label className="cursor-pointer" htmlFor="paid">
          Paid
        </label>
      </div>
    </form>
  )
}
