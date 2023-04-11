import React from "react";
import Kuchbhi from "./components/Kuchbhi";
import "./style.css"
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Kuchbhi 
          title="Laptop"
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61d1xNY54HL._AC_UY327_FMwebp_QL65_.jpg"
          cost={60000}
        />

        <Kuchbhi 
          title="Moblie"
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/716fAVud8PL._AC_UY327_FMwebp_QL65_.jpg"
          cost={114000}
        />

        <Kuchbhi 
          title="iPad"
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61goypdjAYL._AC_UY327_FMwebp_QL65_.jpg"
          cost={41000}
        />
      </div>
    </>
  );
}
