import { Routes, Route } from "react-router-dom";

import Tasks from "./pages/Tasks";
import Store from "./pages/Store.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Navbar />

      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;
