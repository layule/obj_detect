import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import About from "./pages/About";
import Service from "./pages/Service";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home}></Route>
          {/* <Route path="/About" Component={About}></Route> */}
          <Route path="/Service" Component={Service}></Route>
          <Route path="/Login" Component={Login}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
