import Game from "./pages/Game";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Lobby from "./pages/Lobby";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Lobby />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
