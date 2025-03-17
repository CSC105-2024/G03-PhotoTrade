import {
    Hero,
    CategoryList,
    CollectionList,
    Rank,
    Footer,
    Feature1,
    Feature2
} from '@/pages/home'
import MenuLayout from '@/layouts/menu-layout'

const App = () => (
    <>
        <MenuLayout />
        <div className="max-w-7xl mx-auto md:pt-0 px-10 pt-20">
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
