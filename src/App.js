import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages";
import SigninPage from "./Pages/SigninPage";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
