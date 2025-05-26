import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Collection from "@/components/card/collection";
import MainLayout from "@/components/layouts/main-layout";
import { getTop3Collections } from "@/reducer/collection"; 

const CollectionList = () => {
  const dispatch = useDispatch();
  const { topCollections, loading } = useSelector((state) => state.collection);

  useEffect(() => {
    dispatch(getTop3Collections());
  }, [dispatch]);

  const formatCollectionData = (collection) => {
    const formattedPictures = collection.pictures.map(item => ({
      thumbnail_url: item.picture?.thumbnail_url || null
    }));

    return {
      id: collection.id,
      name: collection.name,
      username: collection.user?.name || "Unknown User",
      pictures: formattedPictures
    };
  };
  
  const collectionsWithFourPhotos = topCollections && Array.isArray(topCollections) 
    ? topCollections.filter((item) => 
        item.pictures && 
        Array.isArray(item.pictures) && 
        item.pictures.length === 4
      )
    : [];

  return (
    <MainLayout
      title={"Trending Collection"}
      description={"Checkout Our Weekly Trending Collection On Our Platform"}
    >
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-rows-auto md:grid-cols-3 gap-5">
          {loading ? (
            <div className="col-span-3 text-center py-10">Loading collections...</div>
          ) : collectionsWithFourPhotos.length > 0 ? (
            collectionsWithFourPhotos.map((collection) => {
              const formattedCollection = formatCollectionData(collection);
              return (
                <Collection 
                  key={formattedCollection.id}
                  id={formattedCollection.id}
                  name={formattedCollection.name}
                  username={formattedCollection.username}
                  pictures={formattedCollection.pictures}
                />
              );
            })
          ) : (
            <div className="col-span-3 text-center py-10">No trending collections with 4 pictures found</div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default CollectionList;