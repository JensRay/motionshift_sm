import Like from "../Like/Like.component";
import styles from "./imageCard.module.scss";

const ImageCard = ({ image }) => {
  console.log(image);
  return (
    <div
      style={{ backgroundImage: `url(${image.url})` }}
      className={styles.image_card}
    >
      <div className={styles.card_footer}>
        <div>
          <div className={styles.author}>{image.photographer}</div>
          <Like />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
