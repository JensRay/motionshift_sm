import Like from "../Like/Like.component";
import {
  Author,
  CardData,
  CardFooter,
  ImageCardContainer,
} from "./imageCard.styles";

const ImageCard = ({ image }) => {
  console.log(image);
  return (
    <ImageCardContainer image={image}>
      <CardFooter>
        <CardData>
          <Author>{image.photographer}</Author>
          <Like />
        </CardData>
      </CardFooter>
    </ImageCardContainer>
  );
};

export default ImageCard;
