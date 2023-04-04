import { useState } from "react";

import { HeartLikeButton, LikeContainer } from "./like.styles";

const Like = () => {
  const [liked, setLiked] = useState(false);
  const toggleHeart = () => {
    setLiked(!liked);
  };

  return (
    <LikeContainer onClick={toggleHeart}>
      <HeartLikeButton className={liked && "liked"}></HeartLikeButton>
    </LikeContainer>
  );
};

export default Like;
