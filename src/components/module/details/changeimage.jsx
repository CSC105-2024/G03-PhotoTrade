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
      {like ? (
        <Heart size={40} onClick={Change} fill="red" color="red" />
      ) : (
        <Heart size={40} onClick={Change} color="red" />
      )}
      <p className="text-xl text-white">{likecount}</p>
    </div>
  );
};

export default Imageja;
