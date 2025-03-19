import {
    Hero,
    CategoryList,
    CollectionList,
    Rank,
    Feature1,
    Feature2,
} from '@/pages/home'
import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout'
import LoginPage from './login/login'

const App = () => (

    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={
                <div>
                    <Hero />
                    <CategoryList />
                    <Rank />
                    <CollectionList />
                    <Feature1 />
                    <Feature2 />
                </div>
            } />
            <Route path='/login' element={<LoginPage />} />
        </Route>
    </Routes>

)

export default App
