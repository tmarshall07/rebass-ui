import { darken } from 'polished';

export const defaultColors = {
  text: '#282C30',
  gray5: darken(0.05, '#F8F8F8'),
};

export function validateColor(strColor: string): string | null {
  const s = new Option().style;
  s.color = strColor;

  if (s.color === strColor) {
    return strColor;
  }

  return null;
}
