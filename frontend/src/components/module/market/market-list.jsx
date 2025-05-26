import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import Picture from '@/components/card/picture';
import Collection from '@/components/card/collection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CardContent, Card } from '@/components/ui/card';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links';
import { getAllPhoto, getPhotoByCategory } from '@/reducer/photo';
import { getCollectionAll } from '@/reducer/collection';

const MarketList = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const { photoList, totalPic } = useSelector((state) => state.photo);
  const { collection } = useSelector((state) => state.collection);
  const currentPage = parseInt(searchParams.get('page') ||'1');
  const perPage = parseInt(searchParams.get('pageSize') || '5');
  
  useEffect(() => {
    dispatch(getAllPhoto({ page: currentPage, perPage }));
    dispatch(getCollectionAll());
    setSearchParams({ page: currentPage, pageSize: perPage });
  }, [dispatch, currentPage, perPage, setSearchParams]);
  const collectionsWithFourPhotos = collection.filter((item) => item.pictures && item.pictures.length === 4);
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
              <div className="flex justify-center mt-10 md:justify-between items-center">
                <div className="grid grid-cols lg:grid-cols-4 mx-auto gap-4">
                  {photoList.map((item) => (
                    <Picture
                      key={item.id}
                      name={item.title}
                      price={item.price}
                      username={item.user.name}
                      url={item.thumbnail_url}
                      id={item.id}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="collections">
          <Card className="min-h-screen">
            <CardContent>
              <div className="flex justify-center mt-10 md:justify-between items-center">
                <div className="grid grid-cols md:grid-cols-3 mx-auto gap-4">
                  {collectionsWithFourPhotos.map((item) => (
                    <Collection
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      username={item.user?.name}
                      pictures={item.pictures.map((p) => p.picture)}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <PaginationWithLinks
        page={currentPage}
        pageSize={perPage}
        totalCount={totalPic}
        pageSizeSelectOptions={{
          pageSizeOptions: [5, 10, 25, 50],
        }}
      />
    </section>
  );
};

export default MarketList;
