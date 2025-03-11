import React from 'react'
import Nav from '../../components/nav/Nav'
import MainContent from './MainContent'
import Collection from '../../components/card/Collection'
import Rank from './Rank'
import Hero from '../../layouts/Hero'
import AllCategory from './AllCategory'

const index = () => {
  return (
    <div className='bg-[#060606]'>
      <Nav />
      <main className='flex items-center h-screen'>
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
    </div>
  )
}
export default index
