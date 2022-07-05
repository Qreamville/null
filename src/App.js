import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Project, Skills, Sidebar, Navbar } from "./components";

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
