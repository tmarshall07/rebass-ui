/// <reference types="react" />
import * as React from 'react';
import React__default, { ReactChild, ChangeEvent, ReactNode } from 'react';
import { SxProps } from 'rebass';
import { InputProps as InputProps$1 } from '@rebass/forms';
import { BoxProps as BoxProps$1, ButtonProps as ButtonProps$1 } from 'rebass/styled-components';

declare type ColorsProps = {
    [index: string]: string;
};
declare type SchemeProps = {
    [index: string]: ColorsProps;
};
declare const SCHEMES: readonly ["light", "dark"];
declare type SchemeType = typeof SCHEMES[number];
declare type ColorSchemeProps = {
    scheme: SchemeType;
    userScheme: SchemeType;
    setScheme: (newScheme: SchemeType) => void;
    auto: boolean;
    setAuto: (newAuto: boolean) => void;
};
declare type SchemeProviderProps = {
    colorSchemes?: SchemeProps;
    theme?: {
        [index: string]: any;
    };
    scheme?: string;
    children: React__default.ReactNode;
};
declare function SchemeProvider$1({ theme, scheme, colorSchemes, children }: SchemeProviderProps): JSX.Element;

declare type AutocompleteMenuItemProps = {
    text: string;
    onSelect?: (item: any) => void;
    sx?: SxProps;
    focused?: boolean;
};

declare type BoxProps = BoxProps$1;

declare type Item = {
    [index: string]: any;
};
declare type AutocompleteProps = {
    value: string;
    items?: Item[];
    placeholder?: string;
    menuProps?: BoxProps;
    inputProps?: InputProps$1;
    keyExtractor: (item: Item) => string | number;
    renderItem: (item: Item, hasFocus: boolean) => ReactChild;
    onChange?: (e: ChangeEvent) => void;
    onSelect?: (item: Item) => void;
};

declare class Debouncer$1 {
    timeout: ReturnType<typeof setTimeout>;
    delay: number;
    value: any;
    constructor(initialValue?: any, delay?: number);
    getValue(): any;
    setValue(newValue: any, callback: any): void;
}

declare type ButtonProps = ButtonProps$1 & {
    startIcon?: React__default.ReactNode;
    endIcon?: React__default.ReactNode;
    children?: React__default.ReactNode;
    variant?: 'outline' | 'transparent';
    color?: string;
    bg?: string;
    enabled?: boolean;
    size?: 's';
    onClick?: (e: React__default.MouseEvent) => void;
};
declare function Button$1(props: ButtonProps): JSX.Element;

declare type Props = ButtonProps & {
    icon: ReactNode;
    round?: boolean;
    iconSize?: number | string;
};
declare function IconButton$1(props: Props): JSX.Element;

declare function useDebounce$1(value: any, delay?: number): any;

declare function useColors$1(): {
    [index: string]: string;
};

declare const Autocomplete: (props: AutocompleteProps) => JSX.Element;
declare const AutocompleteMenuItem: (props: AutocompleteMenuItemProps) => JSX.Element;
declare const Box: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<unknown>>;
declare const Flex: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<unknown>>;
declare const Button: typeof Button$1;
declare const Card: (props: any) => JSX.Element;
declare const FetchAutocomplete: (props: AutocompleteProps & {
    onSelect: (item: Item) => void;
    debounce?: number;
    formatResponse?: (data: any) => any[];
    request: (value: string) => Promise<any>;
}) => JSX.Element;
declare const IconButton: typeof IconButton$1;
declare const Input: (props: InputProps) => JSX.Element;
declare const Switch: (props: any) => JSX.Element;
declare const Text: (props: TextProps) => JSX.Element;
declare const P: (props: TextProps) => JSX.Element;
declare const H1: (props: TextProps) => JSX.Element;
declare const H2: (props: TextProps) => JSX.Element;
declare const H3: (props: TextProps) => JSX.Element;
declare const H4: (props: TextProps) => JSX.Element;
declare const A: (props: TextProps) => JSX.Element;
declare const Debouncer: typeof Debouncer$1;
declare const useClickOutside: (ref: any, callback: any) => void;
declare const useColors: typeof useColors$1;
declare const useDebounce: typeof useDebounce$1;
declare const useSchemeContext: () => ColorSchemeProps & {
    colors: {
        [index: string]: string;
    };
};
declare const SchemeProvider: typeof SchemeProvider$1;

export { A, Autocomplete, AutocompleteMenuItem, Box, Button, Card, Debouncer, FetchAutocomplete, Flex, H1, H2, H3, H4, IconButton, Input, P, SchemeProvider, Switch, Text, useClickOutside, useColors, useDebounce, useSchemeContext };
