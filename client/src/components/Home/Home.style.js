import styled from 'styled-components';
import { Container } from '../../GlobalStyles.style';

export const Home = styled.main`
  font-size: 1.2rem;
  background-color: #22254b;
  /*   border: 3px solid red; */
  height: 100vh;
`;

export const HomeContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /*   border: 3px solid green; */
  padding: 15px;
  border-radius: 4px;
  ${Container}
`;

export const Title = styled.h1`
  color: red;
  text-align: center;
  padding: 10px 0;
  margin-bottom: -20px;
`;
