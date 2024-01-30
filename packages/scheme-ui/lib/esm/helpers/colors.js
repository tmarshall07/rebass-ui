import { darken, parseToRgb } from 'polished';
export const defaultColors = {
  text: '#282C30',
  gray5: darken(0.05, '#F8F8F8')
};
export function validateColor(strColor) {
  // Guard invalid colors
  try {
    parseToRgb(strColor);
  } catch (e) {
    return null;
  }
  return strColor;
}
//# sourceMappingURL=colors.js.map