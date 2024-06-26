import { Background } from './components';
import { ThemeContextProvider } from './components/theme-provider';
import { GlobalStyle } from './styles';

export function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeContextProvider>
        <Background.basic>
          <p>Hello world!</p>
        </Background.basic>
      </ThemeContextProvider>
    </>
  );
}
