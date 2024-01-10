import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ListView from "./Pages/ListView/ListView";

function App() {
  return (
    <Routes className="App bg-body-tertiary">
      <Route path="/" element={<HomePage />} />
      <Route path="/list-view" element={<ListView />} />
    </Routes>
  );
}

export default App;
