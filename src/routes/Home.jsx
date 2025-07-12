import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import homeImg from "../pics/forhome.jpg";


function Home(){
return(
<>
<Navbar />
<Hero
kartik="hero"
heroImg={homeImg}
title="Welcome To My Portfolio"
text="KARTIK MADASANAL"



/>


<Footer/>

</>

);

}
export default Home;