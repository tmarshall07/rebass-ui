/// <reference types="react" />
import _Debouncer from './class/debouncer';
import _Button from './components/Button';
import _IconButton from './components/IconButton';
import _useDebounce from './hooks/useDebounce';
import _useColors from './hooks/useColors';
import { SchemeProvider as _SchemeProvider } from './context/SchemeContext';
export declare const Autocomplete: (props: import("./components/Autocomplete").AutocompleteProps) => JSX.Element;
export declare const AutocompleteMenuItem: (props: import("./components/AutocompleteMenuItem").AutocompleteMenuItemProps) => JSX.Element;
export declare const Box: import("react").ForwardRefExoticComponent<Pick<any, string | number | symbol> & import("react").RefAttributes<unknown>>;
export declare const Flex: import("react").ForwardRefExoticComponent<Pick<any, string | number | symbol> & import("react").RefAttributes<unknown>>;
export declare const Button: typeof _Button;
export declare const Card: (props: any) => JSX.Element;
export declare const FetchAutocomplete: (props: import("./components/Autocomplete").AutocompleteProps & {
    onSelect: (item: import("./components/Autocomplete").Item) => void;
    debounce?: number | undefined;
    formatResponse?: ((data: any) => any[]) | undefined;
    request: (value: string) => Promise<any>;
}) => JSX.Element;
export declare const IconButton: typeof _IconButton;
export declare const Input: (props: InputProps) => JSX.Element;
export declare const Switch: (props: any) => JSX.Element;
export declare const Text: (props: TextProps) => JSX.Element;
export declare const P: (props: TextProps) => JSX.Element;
export declare const H1: (props: TextProps) => JSX.Element;
export declare const H2: (props: TextProps) => JSX.Element;
export declare const H3: (props: TextProps) => JSX.Element;
export declare const H4: (props: TextProps) => JSX.Element;
export declare const A: (props: TextProps) => JSX.Element;
export declare const Debouncer: typeof _Debouncer;
export declare const useClickOutside: (ref: import("react").RefObject<HTMLElement>, callback: (e: MouseEvent) => void) => void;
export declare const useColors: typeof _useColors;
export declare const useDebounce: typeof _useDebounce;
export declare const useSchemeContext: () => import("./context/SchemeContext").ColorSchemeProps & {
    colors: {
        [index: string]: string;
    };
};
export declare const SchemeProvider: typeof _SchemeProvider;
//# sourceMappingURL=index.d.ts.map