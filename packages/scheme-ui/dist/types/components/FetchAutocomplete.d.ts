/// <reference types="react" />
import { AutocompleteProps, Item } from './Autocomplete';
declare type Props = AutocompleteProps & {
    onSelect: (item: Item) => void;
    debounce?: number;
    formatResponse?: (data: any) => any[];
    request: (value: string) => Promise<any>;
};
declare const FetchAutocomplete: (props: Props) => JSX.Element;
export default FetchAutocomplete;
