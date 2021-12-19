import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<h1>Hello</h1>} />
      </Routes>
    </div>
  )
}

export default App;
