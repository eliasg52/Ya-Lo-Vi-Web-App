import { createContext, useState, useEffect } from 'react';
import getData from '../helpers/GetMovies';

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getData();
      response = await response.data;
      setData(response);
    }

    fetchMyAPI();
  }, []);

  console.log(data.results);
  return (
    <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>
  );
};

export { MoviesProvider };
export default MoviesContext;
