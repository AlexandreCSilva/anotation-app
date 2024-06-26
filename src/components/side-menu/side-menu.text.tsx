import styled from 'styled-components';

import { useSpring, animated, config } from '@react-spring/web';

const SideMenuTextStyle = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  div {
    color: #474787;
    font-size: 20px;
    height: max-content;
  }
`;

interface Props {
  text: string;
  isOpened: boolean;
}

export function SideMenuText({ text, isOpened }: Props) {
  const linearAnimation = useSpring({
    config: config.wobbly,
    width: !isOpened ? '0px' : '170px',
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
