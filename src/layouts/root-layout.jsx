import MenuLayout from '@/layouts/menu-layout'
import Footer from '@/components/footer/footer'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MenuLayout />
      <main className="flex-grow max-w-7xl mx-auto md:pt-0 px-10 pt-16">
        {children}
      </main>
      <Footer />
    </div>

  )
}

export default Layout
