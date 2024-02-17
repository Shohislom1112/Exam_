import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import "./styles/main.scss";
import Footer from "./components/footer/Footer";
import Card from "./pages/Card";
import AboutUs from "./pages/AboutUs";
import Dishes from "./pages/DIshes";
import DishDetails from "./pages/DishDetails";


function App() {
  return (
    <div className="App">
   
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Dishes" element={<Dishes />}/>
          <Route path="/DishDetails" element={<DishDetails />}/>
          <Route path="/LogIn" element={<LogIn />}/>
          <Route path="/SignUp" element={<DishDetails />}/>
          
        </Routes>

        <Footer />

        <Routes>
          <Route path="/DishDetails" element={<DishDetails />}/>
          <Route path="/Dishes" element={<Dishes />}/>
          <Route path="/About-us" element={<AboutUs />}/>
          <Route path="/Card" element={<Card />}/>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
