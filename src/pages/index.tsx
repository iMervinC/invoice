import type { NextPage } from 'next'
import { PageWrapper } from '@/components/Wrappers'
import HeaderHome from '@/components/Organisms/HeaderHome'

const Home: NextPage = () => {
  return (
    <PageWrapper title="Invoices">
      <HeaderHome />
    </PageWrapper>
  )
}

export default Home
