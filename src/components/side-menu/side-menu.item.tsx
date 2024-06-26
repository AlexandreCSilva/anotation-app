import { ReactNode, useContext, useState } from 'react';
import styled from 'styled-components';

import { config, useSpring, animated } from '@react-spring/web';

import { ThemeContext } from '../theme';

const SideMenuItemStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;

  div {
    border-radius: 5px;
    display: flex;
  }
`;

interface Props {
  icon: string;
  children: ReactNode;
  isOpened: boolean;
}

export function SideMenuItem({ children, isOpened }: Props) {
  const [isHolding, setIsHolding] = useState(false);
  const { isDarkTheme } = useContext(ThemeContext);

  const animation = useSpring({
    config: config.wobbly,
    scale: !isHolding ? 'scaleX(1) scaleY(1)' : 'scaleX(1.2) scaleY(1.2)',
    width: !isOpened ? '42px' : '185px',
  });

  const linearAnimation = useSpring({
    backgroundColor: !isHolding && isDarkTheme ? '#141827' : '#0c0820',
  });

  return (
    <SideMenuItemStyle
      onMouseEnter={() => setIsHolding(true)}
      onMouseLeave={() => {
        if (isHolding) {
          setIsHolding(false);
        }
      }}
    >
      <animated.div
        style={{
          transform: animation.scale,
          backgroundColor: linearAnimation.backgroundColor,
          width: animation.width,
        }}
      >
        {children}
      </animated.div>
    </SideMenuItemStyle>
  );
}
