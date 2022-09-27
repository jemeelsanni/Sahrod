import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/home";
import Footer from "./Layout/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="Header" element={<Header />} />
        <Route path="Navbar" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
