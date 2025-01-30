import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";
import UserProvider from "./contexts/productContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="addProducts" element={<AddProducts />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
