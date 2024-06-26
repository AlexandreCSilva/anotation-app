import { useState } from 'react';

import { Background, SideMenu, ThemeContextProvider } from './components';
import { IconHelper } from './helper';
import { GlobalStyle } from './styles';

export function App() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <GlobalStyle />
      <ThemeContextProvider>
        <Background.basic>
          <SideMenu.Root isOpened={isOpened} setIsOpened={setIsOpened}>
            <SideMenu.Item icon="graph" isOpened={isOpened}>
              <div style={{ width: '40px', padding: '5px' }}>
                {IconHelper('graph', 'small')}
              </div>
              <SideMenu.Text text="Dashboard" isOpened={isOpened} />
            </SideMenu.Item>
          </SideMenu.Root>
          <p>Hello world!</p>
        </Background.basic>
      </ThemeContextProvider>
    </>
  );
}
