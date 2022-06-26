import { Route, Routes } from "react-router-dom"
import { Home, Sidebar } from "./components"

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
