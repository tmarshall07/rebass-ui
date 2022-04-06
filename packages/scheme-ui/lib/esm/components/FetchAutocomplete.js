function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import Autocomplete from './Autocomplete';

const FetchAutocomplete = props => {
  const {
    onSelect,
    request,
    formatResponse,
    debounce = 500
  } = props;
  const [autocompleteItems, setAutocompleteItems] = useState([]);
  const debouncedValue = useDebounce(props.value, debounce);

  const search = async val => {
    const res = await request(val);

    if (res) {
      const newItems = formatResponse(res);
      setAutocompleteItems(newItems);
    }
  };

  useEffect(() => {
    search(debouncedValue);
  }, [debouncedValue]);
  return /*#__PURE__*/React.createElement(Autocomplete, _extends({}, props, {
    items: autocompleteItems,
    onSelect: onSelect
  }));
};

export default FetchAutocomplete;
//# sourceMappingURL=FetchAutocomplete.js.map