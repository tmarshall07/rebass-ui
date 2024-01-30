import { baseH1 } from './classes';
import { buttonTheme } from './classes/button';
import { textThemes } from './classes/text';

export * from './classes';

export * from './Button';

export const theme = {
  button: buttonTheme,
  ...textThemes,
};
