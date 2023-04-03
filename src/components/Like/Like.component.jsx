import { useState } from "react";

import styles from "./like.module.scss";

const Like = () => {
  const [liked, setLiked] = useState(false);
  const toggleHeart = () => {
    setLiked(!liked);
  };

  return (
    <div class={styles.like_container} onClick={toggleHeart}>
      <div class={`${styles.heart_like_button} ${liked && styles.liked}`}></div>
    </div>
  );
};

export default Like;
