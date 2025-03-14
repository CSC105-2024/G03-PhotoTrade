import Collection from "@components/card/Collection"
import MainLayout from "@layouts/MainLayouts"

const CollectionList = () => {
  return (
    <MainLayout 
        title={'Trending Collection'}  
        description={'Checkout Our Weekly Trending Collection On Our Platform'
        }>
        <div className="grid grid-cols-1 md:grid-cols-3">
            <Collection />
            <Collection />
            <Collection />
        </div>
    </MainLayout>
  )
}

export default CollectionList
