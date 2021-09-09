export interface Invoice {
  id: string
  createdAt: string
  paymentDue: string
  description: string
  paymentTerms: number
  clientName: string
  clientEmail: string
  status: 'paid' | 'pending' | 'draft'
  senderAddress: Address
  clientAddress: Address
  items: Item[]
  total: number
}

export interface Address {
  street: string
  city: string
  postCode: string
  country: string
}

export interface Item {
  name: string
  quantity: number
  price: number
  total: number
}

export interface InvoiceItemT {
  id: string
  paymentDue: string
  clientName: string
  total: number
  status: Invoice['status']
}
