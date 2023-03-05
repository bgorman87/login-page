import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Header from './components/Header.js';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
