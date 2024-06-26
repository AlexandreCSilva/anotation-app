import styled from 'styled-components';

import { ChildrenProps } from '../basic.dao';

const BackgroundStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.dark};
`;

export function BasicBackground({ children }: ChildrenProps) {
  return <BackgroundStyle>{children}</BackgroundStyle>;
}
