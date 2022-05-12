import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Zaposlenici from './components/Zaposlenici';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Zaposlenici/>
    </>
  );
}

export default App;
