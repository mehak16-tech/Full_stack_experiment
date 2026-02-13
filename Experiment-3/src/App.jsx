import { BrowserRouter, Routes, Route } from "react-router-dom";

import Store from "./pages/Store.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>

      <div className="d-flex flex-column min-vh-100">

        <Navbar />

        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;
