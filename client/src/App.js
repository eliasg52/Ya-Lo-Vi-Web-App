import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './GlobalStyles.style';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MoviesPage from './pages/Movies';
import Series from './pages/Series';
import { MoviesProvider } from './contexts/MoviesContext';

function App() {
  return (
    <MoviesProvider>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/series" element={<Series />}></Route>
        </Routes>
      </Router>
    </MoviesProvider>
  );
}

export default App;
