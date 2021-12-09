import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './views/Home';
import About from './views/About';
import Player from './views/Player';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
