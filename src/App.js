import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import Listing from "./pages/Home/Listing/listing";
import Homes from "./components/Homes/Homes";

export const MyContext = createContext();

function App() {
  const [countryList, setCountry] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      setCountry(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const contextValues = {
    countryList,
    cartCount,
    setCartCount,
    handleAddToCart,
  };

  return (
    <MyContext.Provider value={contextValues}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/home" element={<Homes />} />
          <Route path="/cat/:id" element={<Listing />} />
          <Route path="*" element={<Homes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
