import styled from 'styled-components';
import Search from '@material-ui/icons/Search';

export const Container = styled.div`
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
`;

export const SearchIcon = styled(Search)`
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
`;
