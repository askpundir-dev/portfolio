import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
