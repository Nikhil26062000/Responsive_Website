import React,{useState} from 'react';
import Header from './Header';
import Line from './Line';
import Navbar from './Navbar';
import Section1 from './Section1';
import Category from './Category';
import Test from './Test';

const Home = () => {

  const [show , setShow] = useState(false);

  const funct =() =>{
     setShow(!show);
     console.log(show);
  }
  return (
    <>
       <Header fun={funct} />
            <Line />
            <Navbar
             show={show}
             showFunction={setShow}
             />

      <Section1 /> 

      <Category />
      <Test />
    </>
  )
}

export default Home;