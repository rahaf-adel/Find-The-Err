import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Cards from "./component/Cards";
import About from "./component/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Route>
          <Routes path="/"></Route>
          <Routes path="/Cards" element={Cards }></Route>
          <Routes path="/About" element={About }></Route>
        </Route>
      </Router>
    </div>
  );
}

export default App;
