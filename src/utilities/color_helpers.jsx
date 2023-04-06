// functions helping color categorization

export const hexToRgb = (hex) =>
  hex
    .slice(1)
    .replace(/^(.)(.)(.)$/gi, "$1$1$2$2$3$3")
    .match(/.{2}/g)
    .map((c) => parseInt(c, 16));

export const distance = (a, b) =>
  Math.sqrt(
    Math.pow(a[0] - b[0], 2) +
      Math.pow(a[1] - b[1], 2) +
      Math.pow(a[2] - b[2], 2)
  );

// For tests 21 color palette.
export const PALETTE = [
  { hex: "#000000", name: "Black" },
  { hex: "#FFFFFF", name: "White" },
  { hex: "#BFBFBF", name: "Light Gray" },
  { hex: "#808080", name: "Gray" },
  { hex: "#F44336", name: "Red" },
  { hex: "#E91E63", name: "Pink" },
  { hex: "#9C27B0", name: "Purple" },
  { hex: "#673AB7", name: "Deep Purple" },
  { hex: "#3F51B5", name: "Blue" },
  { hex: "#2196F3", name: "Light Blue" },
  { hex: "#03A9F4", name: "Cyan" },
  { hex: "#00BCD4", name: "Light Teal" },
  { hex: "#009688", name: "Teal" },
  { hex: "#4CAF50", name: "Green" },
  { hex: "#8BC34A", name: "Light Green" },
  { hex: "#CDDC39", name: "Lime" },
  { hex: "#FFEB3B", name: "Yellow" },
  { hex: "#FFC107", name: "Amber" },
  { hex: "#FF9800", name: "Orange" },
  { hex: "#FF5722", name: "Deep Orange" },
  { hex: "#795548", name: "Brown" },
];
