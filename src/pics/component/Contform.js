


import "./Contforms.css"
import React, {useState} from "react";
import Contact from "../routes/Contact";
function Contform(){

    const [userData, setUserData]= useState({

        Name1:"",
        Massage1:"",
    });
    let name, value;
    const postUserData = (event)=>{

        name=event.target.name;
        value= event.target.value;
      
        setUserData({...userData, [name]:value}
            )
    };

const submitData = async (event) =>{
event.preventDefault();
const { Name1 , Massage1} = userData;
const res = await fetch("https://kartikportfolio-80bc4-default-rtdb.firebaseio.com/userDataRecords.json",
{method : "POST",
headers:{
    "Contact-Type":"application/json"
},
body:JSON.stringify({

    Massage1,
    Name1,

})
}
);
if(res){
    alert("Data Stored")
}
else{

    alert("data fill madro")
}
};

return(
<div className="form-cont">
<h1>Message Me And Say something</h1>
<form method="POST">

<input 
type="text"
name='Name1'
placeholder="Name"

value={userData.Name1}
onChange={postUserData}

/>
<textarea 
type="text"
name='Massage1'
placeholder="Message" 
value={userData.Massage1}
onChange={postUserData}
rows="4"/>


<button onClick={submitData}>Send Message</button>
</form>
</div>

)

}

export default Contform;