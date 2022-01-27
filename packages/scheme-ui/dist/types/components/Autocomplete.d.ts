import { InputProps } from '@rebass/forms';
import { ChangeEvent, ReactChild } from 'react';
import { BoxProps } from './Box';
export declare type Item = {
    [index: string]: any;
};
export declare type AutocompleteProps = {
    value: string;
    items?: Item[];
    placeholder?: string;
    menuProps?: BoxProps;
    inputProps?: InputProps;
    keyExtractor: (item: Item) => string | number;
    renderItem: (item: Item, hasFocus: boolean) => ReactChild;
    onChange?: (e: ChangeEvent) => void;
    onSelect?: (item: Item) => void;
};
declare const Autocomplete: (props: AutocompleteProps) => JSX.Element;
export default Autocomplete;
