import { useState, useRef, useEffect } from 'react';
import Debouncer from '../class/debouncer'; // Hook

function useDebounce(value, delay = 500) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  const debouncer = useRef(new Debouncer(value, delay));
  useEffect(() => {
    debouncer.current.setValue(value, () => {
      setDebouncedValue(value);
    });
  }, [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

export default useDebounce;
//# sourceMappingURL=useDebounce.js.map