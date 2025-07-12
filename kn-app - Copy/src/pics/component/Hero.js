
import "./HeroStyle.css"
function Hero(props){
    return(
    <>
    <div className={props.kartik}>
    <img alt="herpImg" src ={props.heroImg}/>

    <div className="hero-text">
    <h1 className="animate animate__animated animate__bounceInUp">{props.title}</h1>
    <h2 className="animate animate__animated animate__bounceInUp">{props.text}</h2>
    
    </div>
    </div>
    </>
    
    );
    
    }
    export default Hero;