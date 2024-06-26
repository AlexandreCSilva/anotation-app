import styled from 'styled-components';

const SideMenuBarStyle = styled.div`
  margin: 0 15px;
  width: calc(100% - 30px);
  height: 2px;
  background-color: ${(props) => props.theme.color.medium};
`;

interface Props {
  isOpened: boolean;
}

export function SideMenuBar({ isOpened }: Props) {
  return isOpened ? <SideMenuBarStyle /> : <></>;
}
