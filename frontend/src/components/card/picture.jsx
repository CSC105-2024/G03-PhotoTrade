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
import Ellipse from '@/assets/Ellipse.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhotoById } from '@/reducer/photo';
import { toast } from 'sonner';

const Picture = ({ alwaysLike = false, name, price, username, url, id, userId, user_url }) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(alwaysLike);
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const isMarketPath = location.pathname === '/market';

  const handleImageClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      toast.error('Please login to view image details');
      navigate('/user/unauth/login');
      return;
    }
  };

  const handleLikeClick = () => {
    if (!isAuthenticated) {
      toast.error('Please login to like images');
      navigate('/user/unauth/login');
      return;
    }
    setLike(!like);
  };

  const handleUserClick = () => {
    if (!isAuthenticated) {
      toast.error('Please login to view user profiles');
      navigate('/user/unauth/login');
      return;
    }
    navigate(`/user/auth/dashboard/${userId}`);
  };

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
                      <DropdownMenuItem>collection1</DropdownMenuItem>
                      <DropdownMenuItem>collection2</DropdownMenuItem>
                      <DropdownMenuItem>collection3</DropdownMenuItem>
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
          } ${!isAuthenticated ? 'opacity-50' : ''}`}
        />
      </CardFooter>
    </Card>
  );
};

export default Picture;
