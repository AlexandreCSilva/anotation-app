import { Dispatch, ReactNode, SetStateAction } from 'react';
import styled from 'styled-components';

import { config, useSpring, animated } from '@react-spring/web';

const SideMenuRootStyle = styled.div`
  background-color: ${(props) => props.theme.color.dark};
  border-right: solid 2px ${(props) => props.theme.color.medium};
  height: 100vh;
  position: fixed;
`;

interface Props {
  children: ReactNode;
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

export function SideMenuRoot({ children, isOpened, setIsOpened }: Props) {
  let width = window.innerWidth;

  const onResize = () => {
    width = window.innerWidth;

    if (width < 1000 && isOpened === true) {
      setIsOpened(false);
    }
  };

  window.addEventListener('resize', onResize);

  const handleClick = () => {
    if (width > 1000) {
      setIsOpened(!isOpened);
    }
  };

  const animation = useSpring({
    config: config.wobbly,
    width: !isOpened ? '60px' : '240px',
  });

  return (
    <SideMenuRootStyle>
      <animated.div onClick={handleClick} style={{ width: animation.width }}>
        {children}
      </animated.div>
    </SideMenuRootStyle>
  );
}
