import React from 'react'
import Navbar from '@components/Navbar'

export type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="mx-10 lg:mx-48">{children}</main>
    </>
  )
}

export default Layout
