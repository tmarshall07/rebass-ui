import { useEffect } from 'react';
/**
 * A react hook that fires the callback when clicking outside of the referenced element
 *
 * @param {Object} ref - react reference object with a `current` property
 * @param {Function} callback - a callback function that fires when clicking outside the element
 */

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(e);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      // Cleanup
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
//# sourceMappingURL=useClickOutside.js.map