import styled from 'styled-components';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { $BLACK } from '../../styles/color-variables';

export const Container = styled.div`
  position: relative;
`;

export const SelectedCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  border-bottom: 3px solid ${$BLACK};
  cursor: pointer;
`;

export const SelectedCategory = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const ExpandMoreIcon = styled(ExpandMore)``;
export const CategoryList = styled.div`
  position: absolute;
  /* display:none; */
`;
export const CategoryItem = styled.div``;
