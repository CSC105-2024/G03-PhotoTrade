import Home_1 from "@/assets/Home_1.png";
import Home_2 from "@/assets/Home_2.png";
import Ellipse from "@/assets/Ellipse.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Collection = ({name, username}) => {

  return (
    <Card className="w-[300px] h-[465px] pt-0 mb-5 overflow-hidden">
      <CardHeader className="px-0">
        <div className="mb-1">
          <img
            src={Home_1}
            className="w-full h-[200px] aspect-square"
            alt="1"
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <img 
            src={Home_2} 
            className="rounded-r-md" 
            alt="2" 
          />
          <img 
            src={Home_2} 
            className="rounded-md" 
            alt="2" 
          />
          <img 
            src={Home_2} 
            className="rounded-l-md" 
            alt="2" 
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl flex items-start">{name}</CardTitle>
        <div className="flex items-center mt-2 cursor-pointer" onClick={() => navigate('/user/auth/dashboard/1')}>
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
