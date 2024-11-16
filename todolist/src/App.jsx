import { useState } from "react";
import Insert from "./Insert";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import View from "./View.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Insert />} />

          <Route path="/View" element={<View />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
