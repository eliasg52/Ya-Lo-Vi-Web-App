import { Home, HomeContainer, Title } from './Home.style';

const HomeComponent = (props) => {
  console.log(props);
  return (
    <>
      <Home>
        <Title>{props.title}</Title>
        <HomeContainer>{props.children}</HomeContainer>
      </Home>
    </>
  );
};

export default HomeComponent;
