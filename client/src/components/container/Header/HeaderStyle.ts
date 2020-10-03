import styled from 'styled-components';
import BarChart from '@material-ui/icons/BarChart';
import SignalWifi4Bar from '@material-ui/icons/SignalWifi4Bar';
import Person from '@material-ui/icons/Person';
import { $BLACK, $GRAY_003 } from '../../../styles/color-variables';

export const MainContainer = styled.div`
  border-bottom: 1px solid ${$GRAY_003};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const SearchBarContainer = styled.div``;

export const Logo = styled.p`
  display: grid;
  align-items: center;
  color: ${$BLACK};
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BarChartIcon = styled(BarChart)`
  cursor: pointer;
`;
export const SignalWifi4BarIcon = styled(SignalWifi4Bar)`
  cursor: pointer;
`;
export const PersonIcon = styled(Person)`
  cursor: pointer;
`;
