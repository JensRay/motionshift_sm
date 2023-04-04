import data from "../../store/db.json";
import ImageCard from "../ImageCard/ImageCard.component";
import { ImagesGrid, ListContainer, MainContainer } from "./imagesList.styles";

const ImagesList = () => {
  return (
    <MainContainer>
      <ListContainer>
        <ImagesGrid>
          {data.map((image) => {
            return <ImageCard image={image} key={image.id} />;
          })}
        </ImagesGrid>
      </ListContainer>
    </MainContainer>
  );
};

export default ImagesList;
