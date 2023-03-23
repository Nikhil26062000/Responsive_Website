import React, { useState } from "react";
import Header from "./Header";
import Line from "./Line";
import Navbar from "./Navbar";
// import Cards from "./Cards";
// import PicSec from './PicSec'; 
// import Philosophy from "./Philosophy";
// import Section1 from "./Section1";
// import Category from "./Category";
import Footer from "./Footer";

const Home = () => {
  const [show, setShow] = useState(false);

  const funct = () => {
    setShow(!show);
    console.log(show);
  };
  return (
    <>
      <Header fun={funct} />
      <Line />
      <Navbar show={show} showFunction={setShow} />
      {/* <br />
      <br />
      <Section1 />
      <br />
      <br />
      <Cards />
      <br />
      <br />
      <Philosophy />
      <br /> <br />
      <Category />
      <br /> <br /> */}
      {/* <PicSec /> */}
      <Footer />
    </>
  );
};

export default Home;
