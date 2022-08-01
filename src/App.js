import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/NavBar';
import Rockets from './components/rockets/Rockets';
import Brands from './components/brands/Brands';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Brands />} />
          <Route path="/rockets" element={<Rockets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
