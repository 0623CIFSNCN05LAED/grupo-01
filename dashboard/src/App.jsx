import "./App.css";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Usuarios from "./components/Content/Usuarios";
import Productos from "./components/Content/Productos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="usuarios" element={<Usuarios />} />
      <Route path="productos" element={<Productos />} />
    </Routes>
  );
}

export default App;
