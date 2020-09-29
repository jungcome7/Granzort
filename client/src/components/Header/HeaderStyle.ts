import styled from 'styled-components';
import BarChart from '@material-ui/icons/BarChart';
import NetworkWifi from '@material-ui/icons/NetworkWifi';
import Person from '@material-ui/icons/Person';

export const MainContainer = styled.div`
  border-bottom: 1px solid grey;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Logo = styled.p`
  display: grid;
  align-items: center;
  color: grey;
  font-size: 20px;
  font-weight: 800;
`;

export const IconContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BarChartIcon = styled(BarChart)``;
export const NetworkWifiIcon = styled(NetworkWifi)``;
export const PersonIcon = styled(Person)``;
