import styled from 'styled-components';
import {
  $BLACK,
  $GRAY_001,
  $GRAY_002,
  $GRAY_006,
  $GRAY_008,
} from '../../../styles/color-variables';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

export const Container = styled.div`
  margin: 10px 2px;
  cursor: pointer;
  background-color: ${$GRAY_001};
  width: 220px;
  height: 320px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px ${$GRAY_006};
  display: flex;
  align-items: center;
  justify-content: center;

  /* grid */
  align-self: center;
  justify-self: center;

  &:hover {
    background-color: ${$GRAY_002};
  }

  &:last-child {
    color: ${$GRAY_006};
    &:hover {
      color: ${$GRAY_008};
    }
  }
`;

export const AddCircleOutlineIcon = styled(AddCircleOutline)``;
