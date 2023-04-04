import Like from "../Like/Like.component";
import {
  Author,
  CardData,
  CardFooter,
  ImageCardContainer,
} from "./imageCard.styles";

const ImageCard = ({ image }) => {
  return (
    <ImageCardContainer image={image}>
      <CardFooter>
        <CardData>
          <Author>{image.photographer}</Author>
          <Like image={image} />
        </CardData>
      </CardFooter>
    </ImageCardContainer>
  );
};

export default ImageCard;
