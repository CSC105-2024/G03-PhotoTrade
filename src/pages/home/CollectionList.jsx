import Collection from "@components/card/Collection"
import MainLayout from "@layouts/MainLayout"

const CollectionList = () => {
  return (
    <MainLayout 
        title={'Trending Collection'}  
        description={'Checkout Our Weekly Trending Collection On Our Platform'
        }>
        <div className="flex justify-center mt-10 md:justify-between"> 
            <div className="grid grid-cols-1 md:grid-rows-auto md:grid-cols-3 md:gap-5">
                <Collection />
                <Collection />
                <Collection />
            </div>
        </div>    
    </MainLayout>
  )
}

export default CollectionList
