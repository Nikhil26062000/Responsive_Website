import React ,{useState}from 'react';
import Header from './Header';
import Line from './Line';
import Navbar from './Navbar';

const Products = () => {
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

    </>
  )
}

export default Products;