import Movie from '../components/Movies/Movie';
import HomeComponent from '../components/Home/HomeComponent';

const Series = () => {
  console.log('asd');
  return (
    <>
      <HomeComponent title="Pelis Destacadas">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </HomeComponent>
    </>
  );
};

export default Series;
