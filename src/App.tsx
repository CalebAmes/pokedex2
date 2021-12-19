import { Routes, Route } from "react-router-dom";
import AllPokemon from "./views/AllPokemon";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<AllPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
