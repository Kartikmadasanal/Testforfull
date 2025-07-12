import "./CradkStyles.css"
import Cradkdata from "./Cradkdata";
import omkark from "../pics/omkark.jpg"
import any from "../pics/any.jpg"
import rush from "../pics/rush.jpg"
import omp from "../pics/omp.jpg"
import jot from "../pics/jot.jpg"
import vik from "../pics/vik.jpg"
import sup from "../pics/sup.jpg"
import chet from "../pics/chet.jpg"
import shr from "../pics/shr.jpg"


function cradk() {
    return(
<div className="card">
<h1>Friends</h1>


<div className="cradk">
<Cradkdata
image={chet}
heading="Chetan"

/>

<Cradkdata
image={any}
heading="Aneesh"

/>

<Cradkdata
image={omkark}
heading="Omkar"
/>


</div>
<div className="cradk">
<Cradkdata
image={omp}
heading="Omkar p"

/>

<Cradkdata
image={vik}
heading="Vikramaditya"

/>

<Cradkdata
image={shr}
heading="Shrihari"
/>


</div>

<div className="cradk">
<Cradkdata
image={jot}
heading="Jyotiba"

/>

<Cradkdata
image={rush}
heading="Rushikesh"

/>

<Cradkdata
image={sup}
heading="Suprit"
/>


</div>



</div>

    );
    
}
export default cradk;