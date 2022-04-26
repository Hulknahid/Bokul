import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer/Footer";
import TheSalon from "./components/Pages/TheSalon";
import Reservation from "./components/Pages/Reservation";
import GiftCard from "./components/Pages/GiftCard";
import Contact from "./components/Pages/Contact";
import Shop from "./components/Pages/Shop";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get('businesses/123456789').then(res => {
      localStorage.set('app-settings', JSON.stringify(res.data))
    }).catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Salon" element={<TheSalon />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="GiftCard" element={<GiftCard />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
