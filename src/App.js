import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home";
import { About } from "./components/pages/about";
import { Projects } from "./components/pages/projects";
import { ContactForm } from "./components/pages/contact";
import { PageNotFound } from "./components/pages/pageNotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
