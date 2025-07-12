import schoolim from "../pics/school.jpg"
import school1 from "../pics/school2.jpg"
import college2 from "../pics/college2.jpg"
import college1 from "../pics/college1.jpg"
import jcerim from "../pics/jcer.jpg"
import jcer2 from "../pics/jcer2.jpg"
import "./Diss.css"
import Dissdata from "./Dissdata";

const Diss = () =>{
return(<div className="Diss">
<h1>
My Education
</h1>


<Dissdata
className="first-des"
main1="My school"
heading="H N S Kannada Medium High School"
text=">Education is an essential part of our lives. We are nothing without k
nowledge, and education is what separates us from others
. The main step to acquiring education is enrolling oneself 
in a school. School serves as the first learning place for most 
of the people. Similarly, it is the first spark in receiving an education. In this
 essay on my school, I will tell you why I love my school and what my school has tau
 ght me."
img1={schoolim}


 />


 <Dissdata
 className="first-des-rev"
main1="My PU College"
heading=" Raja Lakhamagouda Science Institute "
text="The Raja Lakhamagouda Science Institute is an auto
nomous education institution run by Karnatak Lingayat Educat
ion Society in Belagavi city. It was established in 1935 and 
was named after the head of the former princely state Vantamuri, R
aja Lakhamagouda Saradesai in 1941 who had donated ₹20,000 to the in
stitute.[1] Initially, the institute was a part of Lingaraj Arts colle
ge, Belagavi. It started as a science wing in Lingaraj Arts college, and was separat
ed in 1958. In 1944, the noble laureate Sir C. V. Raman in
augurated the degree course in science in the institute."
img1={college1}


 />


 <Dissdata
 className="first-des"
main1="My Engineering College"
heading=" Jain College of Engineering and Research"
text="At Jain College of Engineering and Research, B
elagavi, we ensure that our students rise beyond the average an
d set remarkable standards through novel thinking and creative ab
ilities which are imbibed in them during their learning years at our institution. We follow a unique blend of aca
demic yet industry friendly curriculum and innovative yet v

alue driven culture building a strong foundation for our leaders of tomorrow."
img1={jcerim}


 />
</div>);

};
export default Diss;