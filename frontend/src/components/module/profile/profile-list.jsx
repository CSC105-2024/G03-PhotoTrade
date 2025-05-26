import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links';
import AddPicture from '@/components/card/add-picture';
import AddCollection from '@/components/card/add-collection';
import Picture from '@/components/card/picture';
import Collection from '@/components/card/collection';
import { getPhotoUser, getPhotoLikebyId, getPhotosByUserTradeHistory } from '@/reducer/photo';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'; 
import { getUserById } from '@/reducer/user';
import { fetchUser } from '@/reducer/auth';
import { getCollectionById } from '@/reducer/collection';

const ProfileList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();  const [searchParams, setSearchParams] = useSearchParams();
  const [likedPhotos, setLikedPhotos] = useState([]);

  const currentPage = parseInt(searchParams.get('page') || '1');
  const perPage = parseInt(searchParams.get('pageSize') || '8');

  const { photoListUser, tradeHistory, total } = useSelector((state) => state.photo);
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);
  const { profileUser } = useSelector((state) => state.user);
  const { collection } = useSelector((state) => state.collection);

  const newPhotolist = isAuthenticated ? photoListUser : (profileUser?.creates ?? []);
  const newCollection = Array.isArray(collection) ? collection : [];
  const handleName = (item) => (isAuthenticated ? item : profileUser?.name);

  const paginatedPhotolist = React.useMemo(() => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return newPhotolist.slice(startIndex, endIndex);
  }, [newPhotolist, currentPage, perPage]);

  useEffect(() => {
    dispatch(getUserById(id));
    dispatch(getCollectionById(id));
    dispatch(getPhotoUser());
    dispatch(getPhotoLikebyId(id)).then((action) => {
      if (action.payload) {
        setLikedPhotos(action.payload);
      }
    });
    dispatch(getPhotosByUserTradeHistory(id));
    dispatch(fetchUser());
  }, [dispatch, id, currentPage, perPage]);

  return (
    <>
      <Tabs defaultValue="listings">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="listings">Listings</TabsTrigger>
          <TabsTrigger value="collections">Collections</TabsTrigger>
          <TabsTrigger value="purchases">Purchases</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
        </TabsList>

        <TabsContent value="listings">
          <Card className="min-h-screen">
            <CardContent>
              {paginatedPhotolist.length === 0 ? (
                <div className="flex justify-center items-center h-[400px]">
                  <p className="text-muted-foreground">No photos found.</p>
                </div>
              ) : (
                <div className="flex justify-center mt-10 md:justify-between items-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-4">
                    {paginatedPhotolist.map((item) => (
                      <Picture
                        key={item.id}
                        name={item.title}
                        price={item.price}
                        username={handleName(item.user?.name)}
                        url={item.thumbnail_url}
                        id={item.id}
                        userId={item.user?.id}
                      />
                    ))}
                    {isAuthenticated && userInfo?.id === parseInt(id) && currentPage === 1 && <AddPicture />}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="collections">
          <Card className="min-h-screen">
            <CardContent>
              <div className="flex justify-center mt-10 md:justify-between items-center">
                <div className="grid grid-cols lg:grid-cols-3 mx-auto gap-4">
                  {newCollection.map((item) => (
                    <Collection
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      username={item.user?.name}
                      pictures={item.pictures.map((p) => p.picture)}
                    />
                  ))}

                  {isAuthenticated && userInfo?.id === parseInt(id) && <AddCollection />}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="purchases">
          <Card className="min-h-screen">
            <CardContent>
              <div className="flex justify-center mt-10 md:justify-between items-center">
                <div className="grid grid-cols lg:grid-cols-4 mx-auto gap-4">
                  {Array.isArray(tradeHistory) &&
                    tradeHistory.map((item) => (
                      <Picture
                        key={item.id}
                        name={item.title}
                        price={item.price}
                        username={item.user?.name || ''}
                        url={item.pictures}
                        id={item.id}
                      />
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favorites">
          <Card className="min-h-screen">
            <CardContent>
              <div className="flex justify-center mt-10 md:justify-between items-center">
                <div className="grid grid-cols md:grid-cols-4 mx-auto gap-4">
                  {Array.isArray(likedPhotos) &&
                    likedPhotos.map((item) => (
                      <Picture
                        key={item.id}
                        name={item.title}
                        price={item.price}
                        username={item.user?.name || ''}
                        url={item.thumbnail_url}
                        id={item.id}
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
        totalCount={newPhotolist.length}
        pageSizeSelectOptions={{
          pageSizeOptions: [4, 8, 12, 16],
        }}
      />
    </>
  );
};

export default ProfileList;
