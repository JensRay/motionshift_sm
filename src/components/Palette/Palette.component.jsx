import { PALETTE } from "../../utilities/color_helpers";
import { Color, PaletteContainer } from "./Palette.styles";

const Palette = ({ setSelectedColor, setShowOptions }) => {
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setShowOptions("");
  };

  return (
    <PaletteContainer>
      {PALETTE.map((color) => (
        <Color
          style={{ backgroundColor: color.hex }}
          onClick={() => handleColorSelect(color)}
          key={color.hex}
        ></Color>
      ))}
    </PaletteContainer>
  );
};

export default Palette;
