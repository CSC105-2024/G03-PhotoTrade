import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuLayout from '@/layouts/menu-layout'
import Footer from './footer/footer'

const Layout = () => {
  return (
    <>
        <MenuLayout />
        <main className="max-w-7xl mx-auto md:pt-0 px-10 pt-16">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout
