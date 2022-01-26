import { InputProps } from '@rebass/forms';
import React, { ChangeEvent, KeyboardEvent, ReactChild, useEffect, useRef, useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import Box, { BoxProps } from './Box';
import Input from './Input';

export type Item = { [index: string]: any };

export type AutocompleteProps = {
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

/**
 * Update the scroll to show more items as the user arrows up or down
 *
 * @param {HTMLElement} el
 * @param {number} index
 */
const updateScroll = (el: HTMLElement, index: number): void => {
  const parent = el;
  if (parent?.children) {
    const child = parent.children[index] as HTMLElement;
    if (child) {
      const childOffsetTop = child.offsetTop;
      const parentScrollTop = parent.scrollTop;
      const parentHeight = parent.offsetHeight;
      const childHeight = child.offsetHeight;

      if (childOffsetTop + childHeight > parentHeight + parentScrollTop) {
        const scrollToY = childOffsetTop + childHeight - parentHeight;
        parent.scrollTo(0, scrollToY);
      } else if (childOffsetTop < parentScrollTop) {
        parent.scrollTo(0, childOffsetTop);
      }
    }
  }
};

const Autocomplete = (props: AutocompleteProps): JSX.Element => {
  const {
    value,
    placeholder,
    items = [],
    menuProps = {},
    inputProps = {},
    onChange,
    onSelect,
    keyExtractor,
    renderItem,
  } = props;

  const menuRef = useRef<HTMLElement>();

  const [menuVisible, setMenuVisible] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  // Handle using arrows to scroll up and down
  useEffect(() => {
    updateScroll(menuRef.current, focusedIndex);
  }, [focusedIndex]);

  const containerRef = useRef();

  useClickOutside(containerRef, () => setMenuVisible(false));

  const handleSelect = (item): void => {
    setMenuVisible(false);
    onSelect(item);
  };

  const handleFocus = (e): void => {
    setMenuVisible(true);
    inputProps.onFocus?.(e);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    let newFocusedIndex = focusedIndex;
    switch (e.key) {
      case 'ArrowUp': // Up
        e.preventDefault();
        if (!(focusedIndex - 1 < 0)) newFocusedIndex -= 1;
        break;
      case 'ArrowDown': // Down
        e.preventDefault();
        if (!(focusedIndex + 1 >= items.length)) newFocusedIndex += 1;
        break;
      case 'Enter': // Enter
        e.preventDefault();
        handleSelect(items[focusedIndex]);
        break;
      default:
        break;
    }

    setFocusedIndex(newFocusedIndex);
  };

  return (
    <Box sx={{ position: 'relative' }} ref={containerRef}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        {...inputProps}
      />
      {menuVisible && !!items.length && (
        <Box
          ref={menuRef}
          {...menuProps}
          sx={{
            position: 'absolute',
            bg: 'bg-2',
            maxHeight: 300,
            width: '100%',
            overflow: 'auto',
            zIndex: 2,
            marginTop: 1,
            borderRadius: 5,
            boxShadow: 'large',
            borderStyle: 'solid',
            borderColor: 'gray5',
            borderWidth: 1,
            ...(menuProps?.sx || {}),
          }}
        >
          {items.map((item, i) => (
            <Box onClick={() => handleSelect(item)} key={keyExtractor(item)}>
              {renderItem(item, i === focusedIndex)}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Autocomplete;
