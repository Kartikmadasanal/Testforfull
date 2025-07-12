
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Contform from "../component/Contform";
import ConImg from "../pics/cont.jpg";

function Contact(){
    return(
    <>
    <Navbar />
    <Hero
    kartik="hero-mid"
    heroImg={ConImg}
  
    ></Hero>
    <Contform/>
    <Footer/>


    </>
    
    )
    
    }
    export default Contact;