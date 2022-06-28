import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from '../layouts/default'
import HomePageContainer from '../containers/home-page'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageContainer />
    </>
  )
}

HomePage.getLayout = (page: React.ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}
