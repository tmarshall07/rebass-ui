import ThemeProvider from '../packages/ui/context/ThemeProvider';
import { SchemeProvider } from '../packages/ui/context/SchemeContext';
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
