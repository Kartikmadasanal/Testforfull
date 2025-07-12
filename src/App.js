import "./index.css"
import { Route, Routes } from "react-router-dom";
import Home from "../src/routes/Home";
import Education from "../src/routes/Education";
import Friends from "../src/routes/Friends";
import Contact from "../src/routes/Contact";

function App() {
  return (
    <div className="App">
    
    <Routes>
    <Route path ="/" element={ <Home/>}/>
    <Route path ="/eduKartik" element={ <Education/>}/>
    <Route path ="/friendsKartik" element={ <Friends/>}/>
    <Route path ="/contactKartik" element={ <Contact/>}/>
    
   
    
    </Routes>
    
     
      
    </div>
  );
}

export default App;
