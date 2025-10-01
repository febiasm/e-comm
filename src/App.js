import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landingpg from "./components/Landingpg";
import Homepg from "./components/Homepg";
import Navbar from "./components/Navbar";
import Productpg from "./components/Productpg";
import Checkout from "./components/checkout";
import Allproducts from "./components/Allproducts";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/product/:id" element={<Productpg />} />
          <Route path="/" element={<Landingpg />} />
          <Route path="/Home" element={<Homepg />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Allproducts" element={<Allproducts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
