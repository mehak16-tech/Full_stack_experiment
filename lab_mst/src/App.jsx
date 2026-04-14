import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <h2>🍲 Recipe Website</h2>

        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/recipes">Recipes</Link>
      </nav>

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/recipes" element={<Recipes />} />
  <Route path="*" element={<NotFound />} />
</Routes>

    </BrowserRouter>
  );
}

export default App;