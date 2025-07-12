import Footer from "../component/Footer";
import Hero from "../component/Hero"
import Navbar from "../component/Navbar"
import Cradk from "../component/Cradk"

import "./carso.css"
import AboutImg from "../pics/frd11.jpg"
import c1 from "../pics/c1.jpg"
import c2 from "../pics/c2.jpg"
import c3 from "../pics/c3.jpg"
import c4 from "../pics/c4.jpg"
import c5 from "../pics/c5.jpg"
import c6 from "../pics/c6.jpg"
import c7 from "../pics/c7.jpg"
import c8 from "../pics/c8.jpg"
import c9 from "../pics/c9.jpg"
import c10 from "../pics/c10.jpg"
import c11 from "../pics/c11.jpg"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSpring, animated } from "react-spring";


function Number ({n}){
const {number}= useSpring({
from:{number:0},
number:n,
delay:200,
config:{mass:1 , tension:20 , friction:10}


});
return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>
}


function Friends(){
    return(
    <>
    <Navbar />
<Hero
kartik="hero-mid"
heroImg={AboutImg}
title="Friends"



/>
<Cradk/>
<div><h1>My Gallery</h1></div>
<Carousel className="carss">
<div>
    <img src={c1}  height="300px" width="200px"/>

</div>
<div>
    <img src={c2}  height="300px" width="200px"/>
   
</div>
<div>
    <img src={c3}  height="300px" width="200px"/>
   
</div>
<div>
    <img src={c4}  height="300px" width="200px"/>
   
</div>
<div>
    <img src={c5}  height="300px" width="200px"/>
   
</div>
<div>
    <img src={c6}  height="300px" width="200px"/>
   
</div>
<div>
    <img src={c7}  height="300px" width="200px"/>
   
</div>
<div>
    <img src={c8}  height="300px" width="200px"/>
   
</div>
<div>
    <img src={c9}  height="300px" width="200px"/>
   
</div>
<div>
    <img src={c10}  height="300px" width="200px"/>
   
</div>

<div>
    <img src={c11}  height="300px" width="200px"/>
   
</div>


</Carousel>


<div className="kartik">
<h1><Number n={100}/></h1>
<h1><Number n={500}/></h1>
<h1><Number n={190}/></h1>


</div>
<Footer/>

    </>
    
    );
    
    }
    export default Friends;