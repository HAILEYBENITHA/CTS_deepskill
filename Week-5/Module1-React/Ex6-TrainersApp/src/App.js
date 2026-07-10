import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import TrainersList from './Components/TrainersList';
import TrainerDetail from './Components/TrainerDetail';
import TrainersMock from './TrainersMock';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/trainers">Trainers</Link>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/trainers"
            element={<TrainersList trainers={TrainersMock} />}
          />
          <Route path="/trainers/:id" element={<TrainerDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
