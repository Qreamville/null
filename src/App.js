import { Route, Routes } from "react-router-dom";
import { Layout, Home, About, Contact, Project } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
