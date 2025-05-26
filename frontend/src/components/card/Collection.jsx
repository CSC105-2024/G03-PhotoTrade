import Home_1 from '@/assets/Home_1.png';
import Home_2 from '@/assets/Home_2.png';
import Ellipse from '@/assets/Ellipse.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useNavigate } from 'react-router-dom';

const Collection = ({ id, name, username, pictures }) => {
  const navigate = useNavigate();

  const mainImage = pictures[0]?.thumbnail_url;

  const smallImages = [];
  for (let i = 1; i < 4; i++) {
    if (pictures[i]) {
      smallImages.push(pictures[i].thumbnail_url);
    } else {
      smallImages.push(undefined);
    }
  }

  return (
    <Card className="w-[300px] h-[465px] pt-0 mb-5 overflow-hidden">
      <CardHeader className="px-0">
        <div className="mb-1">
          {mainImage ? (
            <img src={mainImage} className="w-full h-[200px]  object-cover" alt="Collection main image" />
          ) : (
            <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm">No image</span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-3 gap-2 mb-20">
          {[0, 1, 2].map((index) => (
            <div key={index} className="h-16">
              {smallImages[index] ? (
                <img
                  src={smallImages[index]}
                  className={`h-full w-full object-cover ${
                    index === 0 ? 'rounded-r-md' : index === 1 ? 'rounded-md' : 'rounded-l-md'
                  }`}
                  alt="Collection thumbnail"
                />
              ) : (
                <div
                  className={`h-[150px] w-full bg-gray-200 flex items-center justify-center ${
                    index === 0 ? 'rounded-r-md' : index === 1 ? 'rounded-md' : 'rounded-l-md'
                  }`}
                >
                  <span className="text-gray-400 text-xs">No image</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl flex items-start">{name}</CardTitle>
        <div className="flex items-center mt-2 cursor-pointer" onClick={() => navigate(`/user/auth/dashboard/${id}`)}>
          <Avatar>
            <AvatarImage src={Ellipse} alt="User avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="ml-3 text-sm">{username}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Collection;
