import ImagesList from "../components/ImagesList/ImagesList.component";
import { useStore } from "../store/store";

const YourLikes = () => {
  const likedImages = useStore((state) => state.likedImages);
  return <ImagesList data={likedImages} />;
};

export default YourLikes;
