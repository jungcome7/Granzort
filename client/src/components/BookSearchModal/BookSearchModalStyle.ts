import styled from 'styled-components';
import { $WHITE, $GRAY_009 } from '../../styles/color-variables';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(84, 84, 84, 0.7);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 700px;
  height: 700px;
  border-radius: 10px;
  background-color: ${$WHITE};
  z-index: 1;
  opacity: 1;
  padding: 30px 20px;
  display: flex;
  justify-content: center;
`;
