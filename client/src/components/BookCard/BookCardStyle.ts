import styled from 'styled-components';
import {
  $GRAY_001,
  $GRAY_002,
  $GRAY_006,
  $GRAY_009,
  $BLACK,
} from '../../styles/color-variables';
import FindReplace from '@material-ui/icons/FindReplace';
import MenuBook from '@material-ui/icons/MenuBook';

export const Container = styled.div`
  margin: 10px 2px;
  cursor: pointer;
  background-color: ${$GRAY_001};
  width: 220px;
  height: 318.98px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px ${$GRAY_006};
  display: flex;
  align-self: center;
  justify-self: center;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${$GRAY_002};
    opacity:0.6;
  }

  &:last-child {
    color: ${$GRAY_006};
    &:hover {
      color: ${$BLACK};
      opacity:1;
    }
  }
`;

export const Img = styled.img`
  display: block;
  border-radius: 10px;
  width: 100%;
`;
export const MenuBookIcon = styled(MenuBook)`
  color: ${$GRAY_006};
`;

export const FindReplaceIcon = styled(FindReplace)`
  position: absolute;
  display: flex;
  align-self: center;
  color: ${$GRAY_009};
  /* visibility: hidden; */
`;
