import styled from 'styled-components';
import {
  $GRAY_000,
  $GRAY_001,
  $GRAY_002,
  $GRAY_006,
  $GRAY_004,
} from '../../styles/color-variables';
import MenuBook from '@material-ui/icons/MenuBook';

export const Container = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  background-color: ${$GRAY_000};
  border-radius: 10px;
  cursor: pointer;
  user-select:none;
  &:hover {
    background-color: ${$GRAY_001};
    box-shadow: 2px 2px 5px ${$GRAY_004};
  }
`;

export const BookImg = styled.img`
  width: 120px;
  height: 173.99px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px ${$GRAY_004};
`;

export const EmptyBookImg = styled.div`
  width: 120px;
  height: 173.99px;
  border-radius: 10px;
  background-color: ${$GRAY_001};
  box-shadow: 2px 2px 5px ${$GRAY_004};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuBookIcon = styled(MenuBook)`
  color: ${$GRAY_006};
`;

export const BookInfo = styled.div`
  margin-left: 20px;
  & p {
    margin: 5px;
  }
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
export const Authors = styled.p``;
export const Translators = styled.p``;
export const Publisher = styled.p``;
export const PublishedDate = styled.p``;
