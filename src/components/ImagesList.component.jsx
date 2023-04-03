import data from '../store/db.json';
import ImageCard from './ImageCard.component';
import styles from './images_list.module.scss';

const ImagesList = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.images_list}>
        {data.map((image) => {
          return <ImageCard image={image} key={image.id} />;
        })}
      </div>
    </div>
  );
};

export default ImagesList;
