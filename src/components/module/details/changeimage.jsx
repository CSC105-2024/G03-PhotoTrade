import { Heart } from "lucide-react";
import { useState } from "react";
const Imageja = () => {
  const [like, setlike] = useState(false);
  const [likecount, setlikecount] = useState(520);

  const Change = () => {
    setlike(!like);
    if (!like) {
      setlikecount(likecount + 1);
    } else {
      setlikecount(likecount - 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">

      <Heart
        onClick={ Change }
        className={`cursor-pointer transition-all z-10 ${
          like ? "text-red-500 fill-red-500" : "text-white"
        }`}
      />
      <p className="text-xl text-white">{likecount}</p>
    </div>
  );
};

export default Imageja;
