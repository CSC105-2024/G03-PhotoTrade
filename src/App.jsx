import styles from "./style"
import Navbar from "@components/nav/Navbar"
import { Hero,  CategoryList, CollectionList, Rank, Footer } from '@pages/home'

const App = () => (
  <div className="bg-[#060606] w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-[#060606] ${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <CollectionList />
        <Rank />
        <CategoryList />
      </div>
    </div>
    
    <Footer />
  </div>
)

export default App