import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import Picture from '@/components/card/picture';
import Collection from '@/components/card/collection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CardContent, Card } from '@/components/ui/card';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links';
import {
  getAllPhoto,
  getPhotoByCategory,
  getPhotosByPriceLowToHigh,
  getPhotosByPriceHighToLow,
  getPhotosByNewest,
  getPhotosByBestSeller,
} from '@/reducer/photo';
import { getCollectionAll } from '@/reducer/collection';
import { Loader2 } from 'lucide-react';

const MarketList = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const { photoList, totalPic, loading } = useSelector((state) => state.photo);
  const { collection } = useSelector((state) => state.collection);
  console.log(totalPic)

  const currentPage = parseInt(searchParams.get('page') || '1');
  const perPage = parseInt(searchParams.get('pageSize') || '5');
  const sort = searchParams.get('sort') || '';
  const categoryParam = searchParams.get('category') || '';
  const categoryIds = categoryParam ? categoryParam.split(',').map((id) => parseInt(id)) : [];

  useEffect(() => {
    if (categoryIds.length > 0) {
      dispatch(getPhotoByCategory(categoryIds));
    } else if (sort === 'price_low_to_high') {
      dispatch(getPhotosByPriceLowToHigh());
    } else if (sort === 'price_high_to_low') {
      dispatch(getPhotosByPriceHighToLow());
    } else if (sort === 'newest') {
      dispatch(getPhotosByNewest());
    } else if (sort === 'best_seller') {
      dispatch(getPhotosByBestSeller());
    } else {
      dispatch(getAllPhoto({ page: currentPage, perPage }));
    }

    dispatch(getCollectionAll());

    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', currentPage.toString());
    newParams.set('pageSize', perPage.toString());
    setSearchParams(newParams);
  }, [dispatch, currentPage, perPage, sort, categoryParam]);

  const collectionsWithFourPhotos = collection.filter((item) => item.pictures && item.pictures.length === 4);

  if (loading && photoList.length === 0) {
    return (
      <section className="h-[400px] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Loading items...</span>
      </section>
    );
  }

  return (
    <section>
      <Tabs defaultValue="photo">
        <TabsList className="w-full">
          <TabsTrigger value="photo" className="cursor-pointer">
            Photo
          </TabsTrigger>
          <TabsTrigger value="collections" className="cursor-pointer">
            Collections
          </TabsTrigger>
        </TabsList>

        <TabsContent value="photo">
          <Card className="min-h-screen">
            <CardContent>
              {photoList.length === 0 ? (
                <div className="flex justify-center items-center h-[400px]">
                  <p className="text-muted-foreground">No photos found matching your criteria.</p>
                </div>
              ) : (
                <div className="flex justify-center mt-10 md:justify-between items-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-4">
                    {photoList.map((item) => (
                      <Picture
                        key={item.id}
                        name={item.title}
                        price={item.price}
                        username={item.user?.name}
                        url={item.thumbnail_url}
                        id={item.id}
                        userId={item.user?.id}
                        user_url={item.user?.profile_url}
                      />
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="collections">
          <Card className="min-h-screen">
            <CardContent>
              {collectionsWithFourPhotos.length === 0 ? (
                <div className="flex justify-center items-center h-[400px]">
                  <p className="text-muted-foreground">No collections found.</p>
                </div>
              ) : (
                <div className="flex justify-center mt-10 md:justify-between items-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
                    {collectionsWithFourPhotos.map((item) => (
                      <Collection
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        username={item.user?.name}
                        userId={item.user?.id}
                        pictures={item.pictures.map((p) => p.picture)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {!categoryIds.length && !sort && (
        <PaginationWithLinks
          page={currentPage}
          pageSize={perPage}
          totalCount={totalPic}
          pageSizeSelectOptions={{
            pageSizeOptions: [5, 10, 25, 50],
          }}
        />
      )}
    </section>
  );
};

export default MarketList;
