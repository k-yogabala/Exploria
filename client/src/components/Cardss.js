import React from "react"; 
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlinePeopleAlt } from "react-icons/md";
const Cardss= () => {
     return (
     <React.Fragment>
      <h1 className="text-center text-danger text-capitalize my-5">
        {" "}
        EXPLORIA
        </h1>  
        <marquee>----BOOK NOW OFFER CLOSES SOON----</marquee>
        <div className="container ">
       <div className="row">
       <div className="col">
       <div class="card" >
  <center><img src="https://i.ytimg.com/vi/8UgujS3nAm4/maxresdefault.jpg" class="card-img-top" alt="..."
  height="200px"/>
  </center>
  <div class="card-body">
   <center> <p ><b>World-wide<br/>
    Concerts</b></p>
    ₹ 3000 for adults 1500 for kids<MdOutlinePeopleAlt/>
    <br/>
    {/* <Link to='/contact' class="btn btn-primary">Book Now</Link> */}
    <a href="http://localhost:3000/con">Book Now</a></center>
  </div>
</div>
    </div>
   
    <div className="col">
    <div class="card" >
 <img src="https://i.pinimg.com/564x/54/54/5a/54545a65443951bf694f2eb11515cb22.jpg" alt="..."
  height="200px"/>
  <div class="card-body">
   <p ><b>Temples in India</b></p>

    Starting from ₹500<MdOutlinePeopleAlt/>
    <br/>
    <a href="http://localhost:3000/con">Book Now</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" >
 <center> <img src="https://th.bing.com/th/id/R.11c8e661a28f908340dcd98436859d18?rik=Tz56X1Jb9SUB1A&riu=http%3a%2f%2fd6vrtzdlbankn.cloudfront.net%2fwp-content%2fuploads%2f2018%2f06%2fiStock-502416205-700x420.jpg&ehk=FpxEBhu6g2D6S%2b%2b4Od9Jghv6TZdg98JB49ki37fcBno%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
  height="200px"/></center>
  <div class="card-body">
  <center><p><b>Outdoor Theatre<br/>
       Lawns & Parks</b></p>
       ₹ 150 for adults 50 for kids<MdOutlinePeopleAlt/>
       <br/>
       <a href="http://localhost:3000/con">Book Now</a></center>
   </div> 
</div>
    </div>
   
    <div className="col">
    <div class="card" >
  <img src="https://kidskingdom.ca/wp-content/uploads/2017/06/family-fun-ottawa-outdoor-games-activities-crafts-854x675.jpg" alt="..."
  height="200px"/>
  <div class="card-body">
 <p><b>Weekend Games<br/>
       Lawns & Parks</b></p>
       Based on capacity<br/>
       ₹ 150 for adult 70 for kids<MdOutlinePeopleAlt/>
       <br/>
       <a href="http://localhost:3000/con">Book Now</a>
   </div> 
</div>
    </div>

    </div>
 
  </div>

     </React.Fragment>


     ); 
    }; 

export default Cardss;