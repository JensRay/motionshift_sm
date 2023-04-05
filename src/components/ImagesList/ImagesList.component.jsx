import { useState } from "react";

import { shuffleArray, sortedObjects } from "../../utilities/functions";
import ImageCard from "../ImageCard/ImageCard.component";
import {
  ImagesGrid,
  ListContainer,
  MainContainer,
  SortingContainer,
} from "./imagesList.styles";

// For the needs of the project popular means made by the most frequent authors,
// since there is no data(click, likes etc.)

const ImagesList = ({ data }) => {
  const [activeTab, setActiveTab] = useState("");
  const [items, setItems] = useState(data);

  const handleShuffleClick = (tabTitle) => {
    const shuffledItems = shuffleArray(items);
    setActiveTab(tabTitle);
    setItems(shuffledItems);
  };

  const handleSortPopular = (tabTitle) => {
    const sorted = sortedObjects(items);
    setActiveTab(tabTitle);
    setItems(sorted);
    console.log(sorted);
  };

  const handleTabClick = (tabTitle) => {
    setActiveTab(tabTitle);
  };

  return (
    <MainContainer>
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
            onClick={() => handleTabClick("color")}
          >
            Color
          </li>
        </ul>
      </SortingContainer>
      <ListContainer>
        <ImagesGrid>
          {items?.map((image) => {
            return <ImageCard image={image} key={image.id} />;
          })}
        </ImagesGrid>
      </ListContainer>
    </MainContainer>
  );
};

export default ImagesList;
