// import React from 'react'
// import Nav from '@/components/nav/Nav'
// import Collection from '@components/card/Collection'
// import Footer from '@components/footer/footer'
// import Hero from '@layouts/Hero'
// import Rank from './Rank'
// import MainContent from './Hero'
// import AllCategory from './CategoryList'
// import { ContentSubTop, ContentSubBelow } from './ContentSub'

// const Index = () => {
//   return (
//     <div className='bg-[#060606]'>
//       <section className='hidden md:block'>
//         <Nav />
//       </section>
//       <main className='flex items-center min-h-screen'>
//         <MainContent />
//       </main>

//       <Hero
//         title={'Trending Collection'}
//         description={'PhotoTrade is the premier marketplace for photographers Checkout Our Weekly Trending Collection On Our Platform'}
//       >
//         <div className='grid grid-cols-1 place-items-center gap-5 mt-10 md:grid-cols-3'>
//           <Collection />
//           <Collection />
//           <Collection />
//         </div>
//       </Hero>

//       <Hero
//         title={'Top 10 Image Creators'}
//         description={'PhotoTrade is the premier marketplace for photographers Checkout Our Weekly Trending Collection On Our Platform'}
//       >
//         <Rank />
//       </Hero>

//       <Hero
//         title={'Picture Category'}
//       >
//         <AllCategory />
//       </Hero>

//       <ContentSubTop />
//       <ContentSubBelow />

//       <Footer />
//     </div>
//   )
// }
// export default Index
import Hero from './Hero'
import CategoryList from './CategoryList'
import CollectionList from './CollectionList'
import Rank from './Rank'
import Footer from '@components/footer/footer'

export {
  Hero,
  CategoryList,
  CollectionList,
  Rank,
  Footer
}

