import MenuLayout from '@/layouts/menu-layout'
import Footer from '../components/footer/footer'

const Layout = ({ children }) => {
  return (
    <>
      <MenuLayout />
      <main className="max-w-7xl mx-auto md:pt-0 px-10 pt-16">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
