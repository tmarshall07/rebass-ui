import { buttonTheme } from './classes/button';
import { textThemes } from './classes/text';

export * from './classes';

export * from './Button';

export * from './Text';

export const theme = {
  button: buttonTheme,
  ...textThemes,
};
