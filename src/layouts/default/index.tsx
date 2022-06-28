import React from 'react'
import MenuApp from './MenuApp'
import Navbar from './Navbar'

type DefaultLayoutProps = {}

function DefaultLayout({ children }: React.PropsWithChildren<DefaultLayoutProps>) {
  return (
    <>
      <Navbar />
      <MenuApp />
      <div className='mt-10 px-14'>{children}</div>
    </>
  )
}

export default DefaultLayout
