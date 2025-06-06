import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { Heart, Ellipsis } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhotoById } from '@/reducer/photo';
import { likePhoto, unlikePhoto, clearLikeState } from '@/reducer/user';
import { getCollectionById, addPhotoToCollection } from '@/reducer/collection';
import { toast } from 'sonner';

const Picture = ({ alwaysLike = false, name, price, username, url, id, userId, user_url, isLiked = false }) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(alwaysLike || isLiked);
  const [collections, setCollections] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);
  const { likeLoading, likeSuccess, likeError } = useSelector((state) => state.user);
  const { collection, loading: collectionLoading } = useSelector((state) => state.collection);

  const isMarketPath = location.pathname === '/market';

  useEffect(() => {
    if (isAuthenticated && userInfo?.id) {
      dispatch(getCollectionById(userInfo.id));
    }
  }, [isAuthenticated, userInfo?.id, dispatch]);

  useEffect(() => {
    if (collection && Array.isArray(collection)) {
      setCollections(collection);
    }
  }, [collection]);

  useEffect(() => {
    setLike(alwaysLike || isLiked);
  }, [alwaysLike, isLiked]);

  const handleImageClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      toast.error('Please login to view image details');
      navigate('/user/unauth/login');
      return;
    }
  };

  const handleLikeClick = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to like images');
      navigate('/user/unauth/login');
      return;
    }

    if (likeLoading) return;

    try {
      if (like) {
        await dispatch(
          unlikePhoto({
            userId: userInfo.id,
            pictureId: id,
          })
        ).unwrap();
        setLike(false);
        toast.success('Photo unliked successfully');
      } else {
        await dispatch(
          likePhoto({
            userId: userInfo.id,
            pictureId: id,
          })
        ).unwrap();
        setLike(true);
        toast.success('Photo liked successfully');
      }
    } catch (error) {
      toast.error('Failed to update like status');
      console.error('Like/Unlike error:', error);
    }
  };

  const handleUserClick = () => {
    if (!isAuthenticated) {
      toast.error('Please login to view user profiles');
      navigate('/user/unauth/login');
      return;
    }
    navigate(`/user/auth/dashboard/${userId}`);
  };

  const handleAddToCollection = async (collectionId) => {
    try {
      await dispatch(
        addPhotoToCollection({
          collectionId: collectionId,
          pictureId: id,
        })
      ).unwrap();
      window.location.reload();
      toast.success('Photo added to collection successfully');
    } catch (error) {
      const errorMessage = error?.message || error?.toString() || 'This photo is already in the collection';
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (likeSuccess) {
      dispatch(clearLikeState());
    }
  }, [likeSuccess, dispatch]);

  const formatNumber = (number) => {
    const unitList = ['', 'K', 'M', 'G'];
    let sign = Math.sign(number);
    let unit = 0;

    while (Math.abs(number) >= 1000) {
      unit = unit + 1;
      number = Math.floor(Math.abs(number) / 100) / 10;
    }
    return sign * Math.abs(number) + unitList[unit];
  };

  return (
    <Card className="w-[250px] h-[400px] pt-0 mb-5 overflow-hidden">
      {isAuthenticated ? (
        <Link to={`/market/${id}`}>
          <CardHeader className="px-0 hover:opacity-90 cursor-pointer">
            <img src={url} alt={name} className="w-full h-[200px] aspect-square object-cover" />
          </CardHeader>
        </Link>
      ) : (
        <CardHeader className="px-0 hover:opacity-90 cursor-pointer" onClick={handleImageClick}>
          <img src={url} alt={name} className="w-full h-[200px] aspect-square object-cover" />
        </CardHeader>
      )}

      <CardContent>
        <CardTitle className="text-xl flex items-start">
          {name}
          {!isMarketPath && isAuthenticated && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <Ellipsis size={16} />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Add collection</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {collections.length > 0 ? (
                        collections.map((col) => (
                          <DropdownMenuItem
                            key={col.id}
                            onClick={() => handleAddToCollection(col.id)}
                            disabled={collectionLoading}
                          >
                            {col.name}
                          </DropdownMenuItem>
                        ))
                      ) : (
                        <DropdownMenuItem disabled>No collections available</DropdownMenuItem>
                      )}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    dispatch(deletePhotoById(id));
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </CardTitle>

        <div className="mt-2">
          <h2 className="text-sm font-semibold">Price</h2>
          <p className="text-sm text-muted-foreground">฿ {formatNumber(price)}</p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center mt-2 cursor-pointer" onClick={handleUserClick}>
          <Avatar>
            <AvatarImage src={user_url} alt="User avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="ml-3 text-sm">{username}</p>
        </div>
        <Heart
          onClick={handleLikeClick}
          className={`cursor-pointer transition-all ${
            like ? 'text-destructive fill-destructive' : 'text-muted-foreground'
          } ${!isAuthenticated || likeLoading ? 'opacity-50' : ''}`}
        />
      </CardFooter>
    </Card>
  );
};

export default Picture;
