import Landingpage from "./screens/landingpage/Landingpage";
import { Route, Routes } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landingpage id='home' />} />
      </Routes>

    </div>
  );
}

export default App;
