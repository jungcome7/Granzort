import styled from 'styled-components';
import { $GRAY_001, $GRAY_006 } from '../../styles/color-variables';

export const Container = styled.div`
  margin: 10px 2px;
  cursor: pointer;
  background-color: ${$GRAY_001};
  width: 220px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px ${$GRAY_006};
  display: flex;
  align-self: center;
  justify-self: center;
  
`;
export const Img = styled.img`
  display: block;
  border-radius: 10px;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
`;
