import ThemeProvider from '../packages/ui/src/context/ThemeProvider';
import { SchemeProvider } from '../packages/ui/src/context/SchemeContext';
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
