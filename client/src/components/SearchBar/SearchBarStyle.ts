import styled from 'styled-components';
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import { $GRAY_000, $GRAY_001, $GRAY_006, $GRAY_008 } from '../../styles/color-variables';

interface ContainerProps {
  width:string;
  height:string;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  background-color: ${$GRAY_000};
  display: flex;
  justify-content: center;
  cursor: text;
`;

export const SearchIcon = styled(Search)`
  color: ${$GRAY_006};
  font-size: 16px;
`;

export const ClearIcon = styled(Clear)`
  color: ${$GRAY_006};
  font-size: 16px;
  visibility: hidden;
  cursor: pointer;
  &:hover {
    color: ${$GRAY_008};
  }
`;

export const Input = styled.input`
  font-size: 16px;
  width: 100%;
  &::placeholder {
    text-align: center;
  }

  &:focus {
    &::placeholder {
      text-align: start;
    }
  }
`;
