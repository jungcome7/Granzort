import styled from 'styled-components';
import { $GRAY_000 } from '../../styles/color-variables';

export const Container = styled.div`
  position: absolute;
  background-color: ${$GRAY_000};
  z-index: 2;
  width: 300px;
  max-height: 477px;
  top: 35px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;
