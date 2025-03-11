import React from 'react'
import Nav from '@/components/nav/Nav'
import Collection from '@components/card/Collection'
import Footer from '@components/footer/footer'
import Hero from '@layouts/Hero'
import Rank from './Rank'
import MainContent from './MainContent'
import AllCategory from './AllCategory'

const Index = () => {
  return (
    <div className='bg-[#060606]'>
      <Nav />
      <main className='flex items-center min-h-screen'>
        <MainContent />
      </main>

      <Hero
        title={'Trending Collection'}
        description={'PhotoTrade is the premier marketplace for photographers Checkout Our Weekly Trending Collection On Our Platform'}
      >
        <div className='grid grid-cols-3 mt-10'>
          <Collection />
          <Collection />
          <Collection />
        </div>
      </Hero>

      <Hero
        title={'Top 10 Image Creators'}
        description={'PhotoTrade is the premier marketplace for photographers Checkout Our Weekly Trending Collection On Our Platform'}
      >
        <Rank />
      </Hero>

      <Hero
        title={'Picture Category'}
      >
        <AllCategory />
      </Hero>

      <Footer />

    </div>
  )
}
export default Index
