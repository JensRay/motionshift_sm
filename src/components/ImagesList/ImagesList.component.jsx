import { useCallback, useContext, useEffect, useState } from "react";

import {
  PLATFORMS,
  MEDIA_TYPE,
  INDUSTRY,
  ACTIVITY,
} from "../../utilities/filter_constants";

import FacebookAuthContext from "../../context/FacebookAuthContext";
// import { distance, hexToRgb, PALETTE } from "../../utilities/color_helpers";
import { shuffleArray, sortPopular } from "../../utilities/functions";
import MetaApi from "../Auth/MetaApi.component";
import ImageCard from "../ImageCard/ImageCard.component";
// import Palette from "../Palette/Palette.component";

import Filter from "../Filter/Filter.component";
import {
  ImagesGrid,
  ListContainer,
  MainContainer,
  SortingContainer,
} from "./imagesList.styles";

import { filterObjects } from "../../utilities/functions";

const ImagesList = ({ data }) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([
    "Instagram",
    "Facebook",
  ]);
  const [selectedMediaType, setSelectedMediaType] = useState([
    "Video",
    "Image",
  ]);
  const [selectedIndustry, setSelectedIndustry] = useState([
    "Food & beverage",
    "Technology",
    "Travelling",
    "Fasion",
  ]);
  const [selectedActivity, setSelectedActivity] = useState([
    "Active",
    "Inactive",
  ]);
  const [activeTab, setActiveTab] = useState("");
  const [images, setImages] = useState(data);
  const [showOptions, setShowOptions] = useState("");
  // const [selectedColor, setSelectedColor] = useState(null);
  const [filteredImages, setFilteredImages] = useState(images);

  const { facebookLoggedIn } = useContext(FacebookAuthContext);

  // const nearestColor = useCallback(
  //   (colorHex) =>
  //     PALETTE.map((color) => color.hex).reduce(
  //       (a, v, i, arr) =>
  //         (a =
  //           distance(hexToRgb(colorHex), hexToRgb(v)) < a[0]
  //             ? [distance(hexToRgb(colorHex), hexToRgb(v)), v]
  //             : a),
  //       [Number.POSITIVE_INFINITY, PALETTE.map((color) => color.hex)[0]]
  //     )[1],
  //   []
  // );

  // color_category would be in database, maybe added when a new photo is uploaded.

  // const addCategoryColorToImages = useCallback(() => {
  //   return images.map((image) => ({
  //     ...image,
  //     color_category: nearestColor(image.avg_color),
  //   }));
  // }, [images, nearestColor]);

  // useEffect(() => {
  //   const updatedImages = addCategoryColorToImages();
  //   setImages(updatedImages);
  // }, []);

  const handleShuffleClick = (tabTitle) => {
    const shuffledItems = shuffleArray(images);
    setActiveTab(tabTitle);
    // setSelectedColor(null);
    setFilteredImages(shuffledItems);
    setShowOptions("");
  };

  const handleSortPopular = (tabTitle) => {
    const sorted = sortPopular(images);
    setActiveTab(tabTitle);
    // setSelectedColor(null);
    setFilteredImages(sorted);
    setShowOptions("");
  };

  const toggleTab = (tabTitle) => {
    if (showOptions === "") {
      setActiveTab(tabTitle);
      setShowOptions(tabTitle);
    } else {
      setShowOptions("");
      setActiveTab("");
    }
  };

  // const handleSortColor = (tabTitle) => {
  //   toggleTab(tabTitle);
  // };

  const handlePlatform = (tabTitle) => {
    toggleTab(tabTitle);
  };

  const handlePlatformChange = (selectedOptions) => {
    setSelectedPlatforms(selectedOptions);
  };

  useEffect(() => {
    console.log(images, selectedPlatforms, activeTab);
    setFilteredImages(
      filterObjects(filteredImages, selectedPlatforms, activeTab)
    );
  }, [selectedPlatforms]);

  const handleMediaType = (tabTitle) => {
    toggleTab(tabTitle);
  };

  const handleMediaTypeChange = (selectedOptions) => {
    setSelectedMediaType(selectedOptions);
  };

  useEffect(() => {
    // console.log(images, selectedMediaType, activeTab);
    // console.log(filterObjects(images, selectedMediaType, activeTab));
    setFilteredImages(
      filterObjects(filteredImages, selectedMediaType, activeTab)
    );
  }, [selectedMediaType]);

  const handleIndustry = (tabTitle) => {
    toggleTab(tabTitle);
  };

  const handleIndustryChange = (selectedOptions) => {
    setSelectedIndustry(selectedOptions);
  };

  useEffect(() => {
    // console.log(images, selectedIndustry, activeTab);
    // console.log(filterObjects(images, selectedMediaType, activeTab));
    setFilteredImages(
      filterObjects(filteredImages, selectedIndustry, activeTab)
    );
  }, [selectedIndustry]);

  const handleActivity = (tabTitle) => {
    toggleTab(tabTitle);
  };

  const handleActivityChange = (selectedOptions) => {
    setSelectedActivity(selectedOptions);
  };

  useEffect(() => {
    // console.log(images, selectedActivity, activeTab);
    // console.log(filterObjects(images, selectedMediaType, activeTab));
    setFilteredImages(
      filterObjects(filteredImages, selectedActivity, activeTab)
    );
  }, [selectedActivity]);

  // useEffect(() => {
  //   if (selectedColor) {
  //     const newFilteredImages = images.filter(
  //       (image) => image.color_category === selectedColor.hex
  //     );
  //     setFilteredImages(newFilteredImages);
  //   } else {
  //     setFilteredImages(images);
  //   }
  // }, [selectedColor]);

  // useEffect(() => {
  //   // Combine all selected filters to create the filter object
  //   const filterOptions = {
  //     platform: selectedPlatforms,
  //     media_type: selectedMediaType,
  //     industry: selectedIndustry,
  //     activity: selectedActivity,
  //   };

  //   // Filter the images based on the selected filters
  //   const filtered = Object.entries(filterOptions).reduce(
  //     (result, [filterKey, selectedOptions]) => {
  //       return filterObjects(result, selectedOptions, filterKey);
  //     },
  //     images
  //   );

  //   setFilteredImages(filtered);
  // }, [
  //   selectedPlatforms,
  //   selectedMediaType,
  //   selectedIndustry,
  //   selectedActivity,
  // ]);

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
          {/* <li
            className={activeTab === "palette" ? "active-tab" : ""}
            onClick={() => handleSortColor("palette")}
          >
            Color
          </li> */}
          <li
            className={activeTab === "platform" ? "active-tab" : ""}
            onClick={() => handlePlatform("platform")}
          >
            Platform
          </li>
          <li
            className={activeTab === "media_type" ? "active-tab" : ""}
            onClick={() => handleMediaType("media_type")}
          >
            Media Type
          </li>
          <li
            className={activeTab === "industry" ? "active-tab" : ""}
            onClick={() => handleIndustry("industry")}
          >
            Industry
          </li>
          <li
            className={activeTab === "activity" ? "active-tab" : ""}
            onClick={() => handleActivity("activity")}
          >
            Active
          </li>
        </ul>
        {/* {showOptions === "palette" && (
          <Palette
            setSelectedColor={setSelectedColor}
            setShowOptions={setShowOptions}
          />
        )} */}
      </SortingContainer>
      {showOptions === "platform" && (
        <Filter
          options={PLATFORMS}
          filter="platform"
          selectedOptions={selectedPlatforms}
          onChange={handlePlatformChange}
        />
      )}
      {showOptions === "media_type" && (
        <Filter
          options={MEDIA_TYPE}
          filter="media_type"
          selectedOptions={selectedMediaType}
          onChange={handleMediaTypeChange}
        />
      )}
      {showOptions === "industry" && (
        <Filter
          options={INDUSTRY}
          filter="industry"
          selectedOptions={selectedIndustry}
          onChange={handleIndustryChange}
        />
      )}
      {showOptions === "activity" && (
        <Filter
          options={ACTIVITY}
          filter="activity"
          selectedOptions={selectedActivity}
          onChange={handleActivityChange}
        />
      )}
      <ListContainer>
        <ImagesGrid>
          {filteredImages &&
          (activeTab === "platform" ||
            activeTab === "media_type" ||
            activeTab === "industry" ||
            activeTab === "activity" ||
            activeTab === "popular" ||
            activeTab === "discover")
            ? // && facebookLoggedIn
              filteredImages?.map((image) => (
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
