import axios from 'axios';

const getData = async () => {
  try {
    return await axios.get(
      'https://api.themoviedb.org/3/tv/popular?api_key=7021d08bd7f9b27520aad2294bcd9e18&language=es-MX&page=2'
    );
  } catch (error) {
    console.log(error);
  }
};

export default getData;
