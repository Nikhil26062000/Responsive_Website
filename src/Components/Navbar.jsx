import React from 'react';
import {NavLink} from 'react-router-dom';
// import '../index.css';

const Navbar =({show,showFunction})=> {
    return(
        <>
            <div className="navbar">
                <div className="navbarBox">
                    <NavLink className="anchor" to="/">Home</NavLink>
                    <NavLink className="anchor" to="/products">Products</NavLink>
                    <NavLink className="anchor" to="/service">Services</NavLink>
                    <NavLink className="anchor" to="/contact">Contact</NavLink>
                    <NavLink className="anchor" to="/login">Login</NavLink>
                </div>
            </div>

            <div className={show ? "dropdown":"nothing"}>
                <NavLink className="anchor1" to="/" onClick={()=>{
                    return(showFunction(!show))
                }}>Home</NavLink>
                <NavLink className="anchor2" to="/products" onClick={()=> showFunction(!show)}>Products</NavLink>
                <NavLink className="anchor3" to="/service" onClick={()=> showFunction(!show)}>Services</NavLink>
                <NavLink className="anchor4" to="/contact" onClick={()=> showFunction(!show)}>Contact</NavLink>
                <NavLink className="anchor5" to="/login" onClick={()=> showFunction(!show)}>Login</NavLink>
            </div>
        </>
    )
}

export default Navbar;