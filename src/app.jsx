import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./views/homepage/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
