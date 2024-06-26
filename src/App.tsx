import { Background, ThemeContext } from './components';
import { GlobalStyle } from './styles';

export function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeContext>
        <Background.basic>
          <p>Hello world!</p>
        </Background.basic>
      </ThemeContext>
    </>
  );
}
