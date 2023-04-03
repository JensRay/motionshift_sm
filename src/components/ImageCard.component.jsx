import styles from "./image_card.module.scss";
import Like from "./Like.component";

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
