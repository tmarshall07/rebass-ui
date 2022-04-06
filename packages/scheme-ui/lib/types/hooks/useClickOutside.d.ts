import { RefObject } from 'react';
/**
 * A react hook that fires the callback when clicking outside of the referenced element
 *
 * @param {Object} ref - react reference object with a `current` property
 * @param {Function} callback - a callback function that fires when clicking outside the element
 */
declare const useOutsideClick: (ref: RefObject<HTMLElement>, callback: (e: MouseEvent) => void) => void;
export default useOutsideClick;
//# sourceMappingURL=useClickOutside.d.ts.map