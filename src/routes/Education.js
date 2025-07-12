import Footer from "../component/Footer";
import Diss from "../component/Diss";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar"

import ConImg from "../pics/jcer.jpg"
function Education(){
    return(
    <>
    <Navbar />
    <Hero
    kartik="hero-mid"
    heroImg={ConImg}
    title="Education"
    ></Hero>
    
    
    
    <Diss/>
    <Footer/>

    </>
    
    )
    
    }
    export default Education;