import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <Routes>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
