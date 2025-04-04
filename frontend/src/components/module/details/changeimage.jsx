import { Heart } from "lucide-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/reducer/counter";

const Imageja = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [like, setlike] = useState(false);

  const Change = () => {
    setlike(!like);
    if (!like) {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <Heart
        onClick={Change}
        className={`cursor-pointer transition-all z-10 ${
          like ? "text-red-500 fill-red-500" : "text-white"
        }`}
      />
      <p className="text-xl text-white">{count}</p>
    </div>
  );
};

export default Imageja;
