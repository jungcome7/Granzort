import styled from 'styled-components';
import { $BLACK } from '../../styles/color-variables';

export const Container = styled.div``;

export const Button = styled.button`
  font-size: 16px;
  color: ${$BLACK};
  border: 1px solid ${$BLACK};
  border-radius: 5px;
  padding: 5px 20px;
  margin: 5px;
  cursor: pointer;
`;
