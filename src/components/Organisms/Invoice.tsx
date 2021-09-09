import React from 'react'
import { NextPage } from 'next'
import { InvoiceItemT } from '@/utils/types'

export const InvoiceItem: NextPage<InvoiceItemT> = ({
  id,
  clientName,
  paymentDue,
  status,
  total,
}) => {
  return (
    <div>
      <span>
        <span>#</span>
        {id}
      </span>
      <span>Due {paymentDue}</span>
      <span>{clientName}</span>
      <span>{total}</span>
      <div>{status}</div>
      <img src="/assets/icon-arrow-right.svg" alt="arrow-right" />
    </div>
  )
}
