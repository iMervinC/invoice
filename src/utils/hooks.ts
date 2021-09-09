import { useState, useEffect } from 'react'
import { Invoice } from '@/utils/types'

export const useGetInvoices = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [invoices, setInvoices] = useState<Invoice[] | null>(null)

  const fetchInvoices = async () => {
    try {
      setLoading(true)
      // await fetch('/api/invoices', {
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   method: 'POST',
      //   body: JSON.stringify({ a: 1, b: 2 }),
      // })

      const data: Invoice[] = await fetch('/api/invoices').then((res) =>
        res.json()
      )
      setInvoices(data)
      setLoading(false)
    } catch (e) {
      setError(true)
    }
  }

  useEffect(() => {
    fetchInvoices()
  }, [])

  return { loading, error, data: invoices }
}
