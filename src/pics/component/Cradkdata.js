import Cradk from "./Cradk";
import "./CradkStyles.css";
function Cradkdata (props){
return(

    <div className="c-card">
    <div className="c-image">
   
    <img src={props.image} alt="image"/>
    </div>

    <h4>{props.heading}</h4>
    <p1>{props.text}</p1>
   


    </div>
);

}
export default Cradkdata;
