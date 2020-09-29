import styled from 'styled-components';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { $BLACK, $WHITE, $GRAY_001, $GRAY_005 } from '../../styles/color-variables';

export const Container = styled.div`
  position: relative;
`;

export const SelectedCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  border-bottom: 2px solid ${$GRAY_005};
  cursor: pointer;
`;

export const SelectedCategory = styled.div`
  font-size: 18px;
  font-weight: 600;
  overflow-y: hidden;
`;

export const ExpandMoreIcon = styled(ExpandMore)``;

export const CategoryList = styled.div`
  position: absolute;
  z-index: 1;
  background-color: ${$WHITE};
  width: 100%;
  /* display:none; */
`;

export const CategoryItem = styled.div`
  font-size: 18px;
  font-weight: 600;
  overflow: hidden;
  padding: 5px;
  /* border: 1px solid ${$GRAY_001}; */
  border-bottom: 2px solid ${$GRAY_005};
  cursor: pointer;
  &:hover {
    background-color: ${$GRAY_001};
  }
`;
