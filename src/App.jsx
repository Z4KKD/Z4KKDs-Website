import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/globals.css";
import "./styles/navbar.css";
import "./styles/heroInteractive.css";
import "./styles/footer.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
