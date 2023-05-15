import { useCallback, useContext, useEffect, useState } from "react";

import FacebookAuthContext from "../../context/FacebookAuthContext";
import { distance, hexToRgb, PALETTE } from "../../utilities/color_helpers";
import { shuffleArray, sortedObjects } from "../../utilities/functions";
import MetaApi from "../Auth/MetaApi.component";
import ImageCard from "../ImageCard/ImageCard.component";
import Palette from "../Palette/Palette.component";
import {
  ImagesGrid,
  ListContainer,
  MainContainer,
  SortingContainer,
} from "./imagesList.styles";

const ImagesList = ({ data }) => {
  const [activeTab, setActiveTab] = useState("");
  const [images, setImages] = useState(data);
  const [showPalette, setShowPalette] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [filteredImages, setFilteredImages] = useState(images);

  const { facebookLoggedIn } = useContext(FacebookAuthContext);

  const nearestColor = useCallback(
    (colorHex) =>
      PALETTE.map((color) => color.hex).reduce(
        (a, v, i, arr) =>
          (a =
            distance(hexToRgb(colorHex), hexToRgb(v)) < a[0]
              ? [distance(hexToRgb(colorHex), hexToRgb(v)), v]
              : a),
        [Number.POSITIVE_INFINITY, PALETTE.map((color) => color.hex)[0]]
      )[1],
    []
  );

  // color_category would be in database, maybe added when a new photo is uploaded.

  const addCategoryColorToImages = useCallback(() => {
    return images.map((image) => ({
      ...image,
      color_category: nearestColor(image.avg_color),
    }));
  }, [images, nearestColor]);

  useEffect(() => {
    const updatedImages = addCategoryColorToImages();
    setImages(updatedImages);
  }, [addCategoryColorToImages]);

  const handleShuffleClick = (tabTitle) => {
    const shuffledItems = shuffleArray(images);
    setActiveTab(tabTitle);
    setSelectedColor(null);
    setImages(shuffledItems);
    setShowPalette(false);
  };

  const handleSortPopular = (tabTitle) => {
    const sorted = sortedObjects(images);
    console.log(sorted);
    setActiveTab(tabTitle);
    setSelectedColor(null);
    setImages(sorted);
    setShowPalette(false);
  };

  const handleSortColor = (tabTitle) => {
    setActiveTab(tabTitle);
    setShowPalette(!showPalette);
  };

  useEffect(() => {
    if (selectedColor) {
      const newFilteredImages = images.filter(
        (image) => image.color_category === selectedColor.hex
      );
      setFilteredImages(newFilteredImages);
    } else {
      setFilteredImages(images);
    }
  }, [selectedColor, images]);

  return (
    <MainContainer>
      <MetaApi />
      <SortingContainer>
        <ul>
          <li
            className={activeTab === "discover" ? "active-tab" : ""}
            onClick={() => handleShuffleClick("discover")}
          >
            Discover
          </li>
          <li
            className={activeTab === "popular" ? "active-tab" : ""}
            onClick={() => handleSortPopular("popular")}
          >
            Popular
          </li>
          <li
            className={activeTab === "color" ? "active-tab" : ""}
            onClick={() => handleSortColor("color")}
          >
            Color
          </li>
          <li
            className={activeTab === "platform" ? "active-tab" : ""}
            onClick={() => handleSortColor("platform")}
          >
            Platform
          </li>
          <li
            className={activeTab === "media_type" ? "active-tab" : ""}
            onClick={() => handleSortColor("media_type")}
          >
            Media Type
          </li>
          <li
            className={activeTab === "color" ? "active-tab" : ""}
            onClick={() => handleSortColor("color")}
          >
            Color
          </li>
          <li
            className={activeTab === "color" ? "active-tab" : ""}
            onClick={() => handleSortColor("color")}
          >
            Color
          </li>
        </ul>
        {showPalette && (
          <Palette
            setSelectedColor={setSelectedColor}
            setShowPalette={setShowPalette}
          />
        )}
      </SortingContainer>
      <ListContainer>
        <ImagesGrid>
          {selectedColor && filteredImages && facebookLoggedIn
            ? filteredImages?.map((image) => (
                <ImageCard image={image} key={image.id} />
              ))
            : images?.map((image) => (
                <ImageCard image={image} key={image.id} />
              ))}
        </ImagesGrid>
      </ListContainer>
    </MainContainer>
  );
};

export default ImagesList;
