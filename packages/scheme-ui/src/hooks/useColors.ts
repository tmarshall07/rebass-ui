import { useSchemeContext } from '../context/SchemeContext';

export default function useColors() {
  const { colors } = useSchemeContext();

  return colors;
}
