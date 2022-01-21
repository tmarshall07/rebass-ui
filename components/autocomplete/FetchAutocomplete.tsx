import React, { useEffect, useState } from 'react';
import useDebounce from './../../hooks/useDebounce';
import Autocomplete, { AutocompleteProps, Item } from './Autocomplete';

type Props = AutocompleteProps & {
  onSelect: (item: Item) => void;
  debounce?: number;
  formatResponse?: (data: any) => any[];
  request: (value: string) => Promise<any>;
};

const FetchAutocomplete = (props: Props) => {
  const { onSelect, request, formatResponse, debounce = 500 } = props;

  const [autocompleteItems, setAutocompleteItems] = useState([]);

  const debouncedValue = useDebounce(props.value, debounce);

  const search = async (val: string) => {
    const res = await request(val);

    if (res) {
      const newItems = formatResponse(res);
      setAutocompleteItems(newItems);
    }
  };

  useEffect(() => {
    search(debouncedValue);
  }, [debouncedValue]);

  return <Autocomplete {...props} items={autocompleteItems} onSelect={onSelect} />;
};

export default FetchAutocomplete;
