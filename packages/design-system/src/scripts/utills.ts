// Utility to convert HEX to HSL
export const hexToHsl = (hex: string): string => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
  
    let h = 0;
    if (delta !== 0) {
      if (max === r) {
        h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
      } else if (max === g) {
        h = ((b - r) / delta + 2) * 60;
      } else {
        h = ((r - g) / delta + 4) * 60;
      }
    }
  
    const l = (max + min) / 2;
    const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  
    return `${Math.round(h)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
  };