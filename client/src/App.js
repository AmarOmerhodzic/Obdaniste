import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Zaposlenici from './components/Zaposlenici';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './components/Login';
function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route exact  path="/" element={<Home/>}/>
      <Route exact  path="/about" element={<About/>}/>
      <Route exact  path="/Zaposlenici" element={<Zaposlenici/>}/>
      <Route exact  path="/kontakt" element={<Footer/>}/>
      <Route exact path="/login" element={<Login/>}/>
      {/*<Route exact  path="/register" component={Register}/> */}
      </Routes>
    </>
  );
}

export default App;
