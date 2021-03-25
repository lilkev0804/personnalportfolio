import "./App.css";
import About from "./screens/About";
import Contact from "./screens/Contact";
import HomePage from "./screens/HomePage";
import Navbar from "./screens/Navbar";
import Project from "./screens/Project";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Project></Project>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
