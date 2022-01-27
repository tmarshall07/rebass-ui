/**
 * A react hook that fires the callback when clicking outside of the referenced element
 *
 * @param {Object} ref - react reference object with a `current` property
 * @param {Function} callback - a callback function that fires when clicking outside the element
 */
declare const useOutsideClick: (ref: any, callback: any) => void;
export default useOutsideClick;
