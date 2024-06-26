import styled from 'styled-components';

import { useSpring, animated } from '@react-spring/web';

const SideMenuTextStyle = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  div {
    color: #474787;
  }
`;

interface Props {
  text: string;
  isOpened: boolean;
}

export function SideMenuText({ text, isOpened }: Props) {
  const linearAnimation = useSpring({
    width: !isOpened ? '0px' : '140px',
  });

  return (
    <SideMenuTextStyle>
      {isOpened ? (
        <animated.div style={{ width: linearAnimation.width }}>
          {text}
        </animated.div>
      ) : (
        <></>
      )}
    </SideMenuTextStyle>
  );
}
