import Ellipse from '@/assets/Ellipse.png';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotoId } from '@/reducer/photo';
import { buyPhoto, clearBuyState } from '@/reducer/trade';
import { useEffect } from 'react';

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { photoListId } = useSelector((state) => state.photo);
  const { userInfo } = useSelector((state) => state.auth);
  const { buyLoading, buySuccess, buyError } = useSelector((state) => state.trade);

  const goToMarket = () => {
    navigate('/market');
  };

  const handleBuyPhoto = () => {
    dispatch(
      buyPhoto({
        userId: userInfo.id,
        pictureId: parseInt(params.id),
      })
    );
  };

  useEffect(() => {
    dispatch(getPhotoId(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (buySuccess) {
      toast.success('Purchase successful!');
      navigate('/market');
      dispatch(clearBuyState());
    }

    if (buyError) {
      toast.error('Purchase failed!');
      dispatch(clearBuyState());
    }
  }, [buySuccess, buyError, navigate, dispatch]);

  const formatDate = (date) => {
    const newDate = new Date(date);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return newDate.toLocaleDateString('en-US', options);
  };

  return (
    <div className="md:pt-16">
      <AspectRatio ratio={3 / 2} className="border border-gray-500 rounded-md relative overflow-hidden">
        <img
          src={photoListId?.thumbnail_url}
          alt="Image"
          className="w-full h-full rounded-md object-contain"
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
            <div className="text-white text-4xl font-bold opacity-30 select-none">PHOTOTRADE</div>
          </div>

          <div className="absolute top-8 left-8 rotate-45">
            <div className="text-white text-3xl font-bold opacity-25 select-none">PHOTOTRADE</div>
          </div>

          <div className="absolute top-8 right-8 rotate-45">
            <div className="text-white text-3xl font-bold opacity-25 select-none">PHOTOTRADE</div>
          </div>

          <div className="absolute bottom-8 left-8 rotate-45">
            <div className="text-white text-3xl font-bold opacity-25 select-none">PHOTOTRADE</div>
          </div>

          <div className="absolute bottom-8 right-8 rotate-45">
            <div className="text-white text-3xl font-bold opacity-25 select-none">PHOTOTRADE</div>
          </div>

          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 rotate-45">
            <div className="text-white text-3xl font-bold opacity-25 select-none">PHOTOTRADE</div>
          </div>

          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 rotate-45">
            <div className="text-white text-3xl font-bold opacity-25 select-none">PHOTOTRADE</div>
          </div>

          <div className="absolute top-1/4 left-1/4 rotate-45">
            <div className="text-white text-2xl font-bold opacity-20 select-none">PHOTOTRADE</div>
          </div>

          <div className="absolute top-3/4 right-1/4 rotate-45">
            <div className="text-white text-2xl font-bold opacity-20 select-none">PHOTOTRADE</div>
          </div>
        </div>
      </AspectRatio>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-2">
        <div className="mt-10">
          <h1 className="text-3xl font-bold">{photoListId?.title}</h1>
          <p>{formatDate(photoListId?.create_at)}</p>
        </div>
      </div>

      <div className="mb-26">
        <p className="text-md">{photoListId?.description}</p>
      </div>

      <div className="flex items-center my-5 cursor-pointer" onClick={() => navigate(`/user/auth/dashboard/${photoListId?.user?.id}`)}>
        <Avatar>
          <AvatarImage src={photoListId?.user?.profile_url} alt="User" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="ml-3">{photoListId?.user?.name}</span>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        <Button variant="outline" onClick={goToMarket} className="dark:text-white">
          Nature & Wildlife
        </Button>
        <Button variant="outline" onClick={goToMarket} className="dark:text-white">
          Travel & Destinations
        </Button>
        <Button variant="outline" onClick={goToMarket} className="dark:text-white">
          People & Lifestyle
        </Button>
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="w-full bg-green-500 hover:bg-green-500" disabled={buyLoading}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            {buyLoading ? 'Processing...' : 'Buy now'}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Purchase</AlertDialogTitle>
            <AlertDialogDescription>
              This purchase cannot be refunded.
              <br />
              Are you sure you want to buy this photo?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="dark:text-white">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleBuyPhoto} disabled={buyLoading}>
              {buyLoading ? 'Processing...' : 'Confirm'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Detail;
