import styled from 'styled-components';
import { $GRAY_006 } from '../../styles/color-variables';

export const Container = styled.div`
  margin: 10px 2px;
  cursor: pointer;
  background-color: black;
  width: 220px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px ${$GRAY_006};
`;
export const Img = styled.img`
  display: block;
  border-radius: 10px;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
`;
