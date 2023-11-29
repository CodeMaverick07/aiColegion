import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Community from "./pages/Community";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
