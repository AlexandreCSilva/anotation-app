import { ReactNode } from 'react';
import styled from 'styled-components';

import { useSpring, animated } from '@react-spring/web';

const SideMenuFootStyle = styled.div`
  position: absolute;
  bottom: 0;
`;

interface Props {
  children: ReactNode;
  isOpened: boolean;
}

export function SideMenuFoot({ children, isOpened }: Props) {
  const animation = useSpring({
    left: !isOpened ? 'translate(8px, 0)' : 'translate(22px, 0)',
  });

  return (
    <SideMenuFootStyle>
      <animated.div style={{ transform: animation.left }}>
        {children}
      </animated.div>
    </SideMenuFootStyle>
  );
}
