import React,{useState} from "react";
import "./style.css"
import Navbar from "./components/Navbar/Navbar";
import Allproducts from "./components/Products/Allproducts";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checking/Checkout";
import Info from './components/Checking/Info'
import Shipping from './components/Checking/Shipping'
import Payment from './components/Checking/Payment'

export default function App() {

  const [email,setemail]=useState("");
  const [number,setnumber]=useState("");

  function handleemailchange(event){
    setemail(event.target.value);
  }

  function handlenumberchange(event){
    setnumber(event.target.value);
  }

  return (
    <>
      <div className="bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Allproducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} >
            <Route index path="info" element={<Info email={email} emailchange={handleemailchange} number={number} numberchange={handlenumberchange}/>} />
            <Route path="shipping" element={<Shipping email={email} number={number}/>} />
            <Route path="payment" element={<Payment/>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
