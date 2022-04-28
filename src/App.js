import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Game from "./pages/Game";
import Home from "./pages/Home";
import GameSimple from "./pages/GameSimple";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Home />} />
        <Route path="/dev" element={<GameSimple />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
