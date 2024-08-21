import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar";
import Home from "./pages/Homes";
import Pokemon from './pages/Pokemon';
import About from "./pages/About";
import "./App.css";

const App = () => (
  <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/pokemon" element={<Pokemon />}/>
    <Route path="/about" element={<About />}/>
      
    </Routes>
    </Router>
);


export default App