import { useStore } from "../../store/store";
import { HeartLikeButton, LikeContainer } from "./like.styles";

const Like = ({ image }) => {
  const likedImages = useStore((state) => state.likedImages);
  const liked = useStore((state) =>
    state.likedImages.some(
      (likedImage) => likedImage.id === image.id && likedImage.liked
    )
  );
  const addLikedImage = useStore((state) => state.addLikedImage);
  const removeLikedImage = useStore((state) => state.removeLikedImage);

  const handleLike = () => {
    const index = likedImages.findIndex(
      (likedImage) => likedImage.id === image.id
    );
    if (index === -1) {
      addLikedImage({ ...image, liked: true });
    } else {
      removeLikedImage(image.id);
    }
  };

  const toggleHeart = () => {
    handleLike(image);
  };

  return (
    <LikeContainer onClick={toggleHeart}>
      <HeartLikeButton className={liked && "liked"}></HeartLikeButton>
    </LikeContainer>
  );
};

export default Like;
