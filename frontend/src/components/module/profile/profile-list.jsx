import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import AddPicture from '@/components/card/add-picture';
import AddCollection from '@/components/card/add-collection';
import Picture from '@/components/card/picture';
import Collection from '@/components/card/collection';
import { getPhotoUser, getPhotoLikebyId, getPhotosByUserTradeHistory } from '@/reducer/photo';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserById } from '@/reducer/user';
import { fetchUser } from '@/reducer/auth';
import { getCollectionById } from '@/reducer/collection';

const ProfileList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [likedPhotos, setLikedPhotos] = useState([]);

  const { photoListUser, tradeHistory } = useSelector((state) => state.photo);
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);
  const { profileUser } = useSelector((state) => state.user);
  const { collection } = useSelector((state) => state.collection);

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
  }, [dispatch, id]);

  const newPhotolist = isAuthenticated ? photoListUser : (profileUser?.creates ?? []);
  const newCollection = Array.isArray(collection) ? collection : [];
  const handleName = (item) => (isAuthenticated ? item : profileUser?.name);
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
              <div className="flex justify-center mt-10 md:justify-between items-center">
                <div className="grid grid-cols lg:grid-cols-4 mx-auto gap-4">
                  {newPhotolist.map((item) => (
                    <Picture
                      key={item.id}
                      name={item.title}
                      price={item.price}
                      username={handleName(item.user?.name)}
                      url={item.thumbnail_url}
                      id={item.id}
                    />
                  ))}
                  {isAuthenticated && userInfo?.id === parseInt(id) && <AddPicture />}
                </div>
              </div>
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

      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default ProfileList;
