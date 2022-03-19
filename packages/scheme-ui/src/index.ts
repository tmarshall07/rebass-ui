import _Debouncer from './class/debouncer';
import _Autocomplete from './components/Autocomplete';
import _AutocompleteMenuItem from './components/AutocompleteMenuItem';
import { Box as _Box, Flex as _Flex } from './components/Box';
import _Button from './components/Button';
import _Card from './components/Card';
import _FetchAutocomplete from './components/FetchAutocomplete';
import _IconButton from './components/IconButton';
import _Input from './components/Input';
import _Switch from './components/Switch';
import { Text as _Text, A as _A, H1 as _H1, H2 as _H2, H3 as _H3, H4 as _H4, P as _P } from './components/Text';
import _useOutsideClick from './hooks/useClickOutside';
import _useDebounce from './hooks/useDebounce';
import _useColors from './hooks/useColors';
import { useSchemeContext as _useSchemeContext, SchemeProvider as _SchemeProvider } from './context/SchemeContext';

export const Autocomplete = _Autocomplete;
export const AutocompleteMenuItem = _AutocompleteMenuItem;
export const Box = _Box;
export const Flex = _Flex;
export const Button = _Button;
export const Card = _Card;
export const FetchAutocomplete = _FetchAutocomplete;
export const IconButton = _IconButton;
export const Input = _Input;
export const Switch = _Switch;
export const Text = _Text;
export const P = _P;
export const H1 = _H1;
export const H2 = _H2;
export const H3 = _H3;
export const H4 = _H4;
export const A = _A;

export const Debouncer = _Debouncer;

export const useClickOutside = _useOutsideClick;
export const useColors = _useColors;
export const useDebounce = _useDebounce;
export const useSchemeContext = _useSchemeContext;

export const SchemeProvider = _SchemeProvider;