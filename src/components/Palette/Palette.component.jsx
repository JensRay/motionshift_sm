import { PALETTE } from "../../utilities/color_helpers";
import { Color, PaletteContainer } from "./Palette.styles";

const Palette = ({ setSelectedColor, setShowPalette }) => {
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setShowPalette(false);
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
