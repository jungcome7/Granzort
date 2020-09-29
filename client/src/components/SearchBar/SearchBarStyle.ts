import styled from 'styled-components';
import Search from '@material-ui/icons/Search';

export const Container = styled.div`
  width: 300px;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  cursor: text;
`;

export const SearchIcon = styled(Search)`
  font-size: 16px;
`;

export const Input = styled.input`
  font-size: 16px;
  width: 60px;
  &::placeholder {
    text-align: center;
  }

  &:focus {
    width: 100%;
    &::placeholder {
      text-align: start;
    }
  }
`;
