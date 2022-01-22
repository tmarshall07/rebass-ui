import { useSchemeContext } from '../context/SchemeContext';
import getColors from '../../../styles/colors';

export default function useColors() {
  const { scheme } = useSchemeContext();
  return getColors(scheme);
}
