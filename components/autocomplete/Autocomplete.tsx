import React, { ReactChild, useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import Box from '../Box';
import Input from '../Input';

export type AutocompleteProps = {
  value: string;
  items: { [index: string]: any }[];
  keyExtractor: (item: any) => string | number;
  renderItem: (item: any) => ReactChild;
  placeholder?: string;
  onChange?: (e: any) => void;
  onSelect?: (item: any) => void;
  menuStyle?: { [index: string]: string | number };
};

const Autocomplete = (props: AutocompleteProps) => {
  const { value, placeholder, onChange, items = [], onSelect, keyExtractor, renderItem, menuStyle = {} } = props;

  const [menuVisible, setMenuVisible] = useState(false);
  const containerRef = useRef();

  useClickOutside(containerRef, () => setMenuVisible(false));

  const handleSelect = (item) => {
    setMenuVisible(false);
    onSelect?.(item);
  };

  const handleFocus = () => {
    setMenuVisible(true);
  };

  return (
    <Box ref={containerRef}>
      <Input placeholder={placeholder} onFocus={handleFocus} value={value} onChange={onChange} />
      {menuVisible && !!items.length && (
        <Box
          sx={{
            position: 'absolute',
            bg: 'white',
            maxHeight: 300,
            width: 400,
            maxWidth: '80%',
            overflow: 'auto',
            zIndex: 2,
            marginTop: 1,
            borderRadius: 5,
            boxShadow: 'large',
            borderStyle: 'solid',
            borderColor: 'gray5',
            borderWidth: 1,
            ...menuStyle,
          }}
        >
          {items.map((item) => (
            <Box onClick={() => handleSelect(item)} key={keyExtractor(item)}>
              {renderItem(item)}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Autocomplete;
