import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

const PageWrapper: NextPage<{ title: string }> = ({ title, children }) => {
  return (
    <div className="contain">
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export { PageWrapper }
