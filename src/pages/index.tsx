import type { NextPage } from 'next'
import { PageWrapper } from '@/components/Wrappers'
import { HeaderHome, InvoiceItem } from '@/components/Organisms'
import { useGetInvoices } from '@/utils/hooks'

const Home: NextPage = () => {
  const { data, error, loading } = useGetInvoices()

  return (
    <PageWrapper title="Invoices">
      <HeaderHome />
      {loading && <span>Loading...</span>}
      {data?.map((item) => (
        <InvoiceItem key={item.id} {...item} />
      ))}
      {error && <span>Error</span>}
    </PageWrapper>
  )
}

export default Home
