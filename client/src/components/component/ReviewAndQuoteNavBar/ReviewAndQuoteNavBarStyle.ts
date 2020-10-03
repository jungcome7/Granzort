import styled from 'styled-components';
import BorderColor from '@material-ui/icons/BorderColor';
import FormatListNumbered from '@material-ui/icons/FormatListNumbered';
import { $GRAY_000, $GRAY_001, $GRAY_003 } from '../../../styles/color-variables';

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  border-top: 1px solid ${$GRAY_003};
  border-bottom: 1px solid ${$GRAY_003};
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
`;

export const ReviewBar = styled.div`
  border-right: 1px solid ${$GRAY_003};
  padding: 10px;
  background-color: ${$GRAY_001};
`;

export const BorderColorIcon = styled(BorderColor)``;
export const QuoteBar = styled.div`
  padding: 10px;
`;
export const FormatListNumberedIcon = styled(FormatListNumbered)``;
