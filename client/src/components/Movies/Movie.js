import {
  MovieCard,
  MovieImage,
  MovieTitle,
  MovieYear,
  MovieInfo,
} from './Movie.style';

import myImage from '../../assets/download.jpg';

const Movie = () => {
  return (
    <MovieCard>
      <MovieImage src={myImage} />
      <MovieInfo>
        <MovieTitle>Spiderman</MovieTitle>
        <MovieYear>2012</MovieYear>
      </MovieInfo>
    </MovieCard>
  );
};

export default Movie;
