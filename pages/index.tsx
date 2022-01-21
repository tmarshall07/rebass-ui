import ThemeProvider from '../context/ThemeProvider';
import { SchemeProvider } from '../context/SchemeContext';
import Components from '../examples/Components';

export default function Home() {
  return (
    <SchemeProvider>
      <ThemeProvider>
        <Components />
      </ThemeProvider>
    </SchemeProvider>
  );
}
