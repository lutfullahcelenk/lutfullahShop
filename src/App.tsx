import React from "react";
import { Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import About from "./pages/about";
import Home from "./pages/home";

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
};

export default App;
