import data from "../../store/db.json";
import ImageCard from "../ImageCard/ImageCard.component";
import styles from "./imagesList.module.scss";

const ImagesList = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.list_container}>
        <div className={styles.images_list}>
          {data.map((image) => {
            return <ImageCard image={image} key={image.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ImagesList;
