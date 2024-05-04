import "./App.css";
import "./style/reset.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tab from "./pages/Tab";
import MySwiper from "./components/MySwiper";

function App() {
  return (
    <div className="page-container">
      <Header />
      <MySwiper />
      <Footer />
    </div>
  );
}

export default App;
