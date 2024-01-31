import { buttonTheme } from './classes/button';
import { textThemes } from './classes/text';
import { inputTheme } from './classes/input';

export const theme = {
  button: buttonTheme,
  input: inputTheme,
  ...textThemes,
};
