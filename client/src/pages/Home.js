import { useContext } from 'react';
import MoviesContext from '../contexts/MoviesContext';
import HomeComponent from '../components/Home/HomeComponent';
/* import { MoviesProvider } from '../contexts/MoviesContext'; */

const HomePage = () => {
  const data = useContext(MoviesContext);
  console.log(MoviesContext);
  /*   const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/tv/popular?api_key=7021d08bd7f9b27520aad2294bcd9e18&language=es-MX&page=2'
    );
    setData(response.data);
  };
 */
  /*  useEffect(() => {
    getData();
  }, []);
  console.log(data); */
  console.log(data.results);

  return <HomeComponent />;
};

export default HomePage;
