// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Invoice } from '@/utils/types'
import Data from '../../data.json'

let InvoiceData = Data
interface InvoiceT extends Omit<Invoice, 'status'> {
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<InvoiceT[]>
) {
  switch (req.method) {
    case 'POST':
      const invoice = req.body
      InvoiceData.push(invoice)
      res.status(200)
    case 'GET':
      res.status(200).json(Data)
  }
}
