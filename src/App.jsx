import { Hero, CategoryList, CollectionList, Rank, Footer, Navbar, Feature1, Feature2 } from '@pages/home'

const App = () => (
  <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-10">
      <Hero />
      <CollectionList />
      <Rank />
      <CategoryList />
      <Feature1 />
      <Feature2 />
    </div>
    <Footer />
  </>
)

export default App