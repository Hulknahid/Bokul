import React from "react";
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
import Products from "./components/Pages/Products";
import MyTeam from "./components/Pages/MyTeam";
import MemberDetails from "./components/Pages/MemberDetails";
import OurLocation from "./components/Pages/OurLocation";
import Service from "./components/Pages/Service";
import ForgetPassword from "./components/Pages/ForgetPassword";
import Registration from "./components/Pages/Registration";
import Login from "./components/Pages/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/salon" element={<TheSalon />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/giftCard" element={<GiftCard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productId" element={<Products />} />
        <Route path="/myTeam" element={<MyTeam />} />
        <Route path="/memberDeatails/:memberId" element={<MemberDetails />} />
        <Route path="/ourLocation" element={<OurLocation />} />
        <Route path="/service" element={<Service />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
