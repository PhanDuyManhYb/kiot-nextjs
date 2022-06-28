import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

type NextPageWithLayout<P = any> = NextPage<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout): React.ReactNode {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <Provider store={store}>
      {getLayout(
        <>
          <Component {...pageProps} />
        </>
      )}
    </Provider>
  )
}

export default MyApp
