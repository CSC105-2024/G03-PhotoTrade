import {
    Hero,
    CategoryList,
    CollectionList,
    Rank,
    Feature1,
    Feature2,
} from '@/components/module/home'
import Layout from '@/layouts/root-layout'

const App = () => (
    <Layout>
        <Hero />
        <CollectionList />
        <Rank />
        <CategoryList />
        <Feature1 />
        <Feature2 />
    </Layout>
)

export default App
