import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import "./index.css";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <div id="hero">
        <Hero />
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
