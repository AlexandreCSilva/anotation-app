import { ReactNode } from 'react';
import styled from 'styled-components';

const BackgroundStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.background};
`;

interface Props {
  children: ReactNode;
}

export function BasicBackground({ children }: Props) {
  return <BackgroundStyle>{children}</BackgroundStyle>;
}
