import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Game from "./pages/Game";
import Home from "./pages/Home";
import GameSimple from "./pages/GameSimple";
import Test from "./pages/Test";
import Tutorial from "./pages/Tutorial";
import Framer from "./pages/Framer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Home />} />
        <Route path="/dev" element={<GameSimple />} />
        <Route path="/test" element={<Test />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/framer" element={<Framer />} />
      </Routes>
    </Router>
  );
}

export default App;
