import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Brands from './components/brands/Brands';
import Phones from './components/phones/Phones';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Brands />} />
          <Route path="/:slug" element={<Phones />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
