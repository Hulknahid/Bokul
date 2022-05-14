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
import Products from "./components/Pages/ProductsD";
import MyTeam from "./components/Pages/MyTeam";
import MemberDetails from "./components/Pages/MemberDetails";
import OurLocation from "./components/Pages/OurLocation";
import Service from "./components/Pages/Service";
import ForgetPassword from "./components/Pages/ForgetPassword";
import CreatAccount from "./components/Pages/CreatAccount";



function App() {
  return (
    <>
    {/* <GiftCardLink/> */}
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Salon" element={<TheSalon />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/GiftCard" element={<GiftCard />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/products/:productId" element={<Products />} />
        <Route path="/myTeam/:" element={<MyTeam />} />
        <Route path="/memberDeatails/:memberId" element={<MemberDetails />} />
        <Route path="/ourLocation/:" element={<OurLocation />} />
        <Route path="/service/:" element={<Service />} />
        <Route path="/forgetPassword/:" element={<ForgetPassword />} />
        <Route path="/creatAccount/:" element={<CreatAccount />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
