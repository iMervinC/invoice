import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

const PageWrapper: NextPage<{ title: string }> = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 h-screen transition-colors ">
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main className="container max-w-[730px]">{children}</main>
    </div>
  )
}

export { PageWrapper }
