import React from 'react';
// import Header from './Header';
// import Line from './Line';
// import Navbar from './Navbar';
import Products from './Products';
import Contact from './Contact';
import Service from './Service';
import Login from './Login';
import Home from './Home';
// import PicSec from './PicSec';
// import Section1 from './Section1';

import {Switch,Route} from 'react-router-dom';

const App = ()=> {

    // const [show , setShow] = useState(false);

    // const funct =() =>{
    //    setShow(!show);
    //    console.log(show);
    // }

    return(
        <>
            {/* <Header fun={funct} />
            <Line />
            <Navbar
             show={show}
             showFunction={setShow}
             /> */}
             {/* <PicSec /> */}
             
 
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
            </Switch>

            {/* <Section1 />  */}
        </>
    )
}

export default App;