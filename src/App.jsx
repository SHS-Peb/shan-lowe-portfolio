import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import CodeDeveloper from "./pages/CodeDeveloper";
import Advocacy from "./pages/Advocacy";
import Projects from "./pages/Projects";
import Spotlight from "./pages/Spotlight";
import Writing from "./pages/Writing";
import Acting from "./pages/Acting";
import Photography from "./pages/Photography";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/code-developer" element={<CodeDeveloper />} />
        <Route path="/advocacy" element={<Advocacy />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/spotlight" element={<Spotlight />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/acting" element={<Acting />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
