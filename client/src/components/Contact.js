import "./contact.css";
const Contact = () => {
  return (
    <>
      {/* Contact Header */}
      <div className="contact">
        <div>
          <div className="img">
            <img src="https://i.pinimg.com/564x/54/54/5a/54545a65443951bf694f2eb11515cb22.jpg" alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="ContactContent">
          {/*  */}
          <form action="">
            <h6>Contact Us</h6>
            <center><p className="lion"> We make your day special</p></center>
            <p ><b>Manager<br/>
    Kalli Yoga Bala</b></p>
    Contact   - +919989634265<br/>
    What'sapp - +919989634265

    <br/>
    <br/>
    <p ><b>Sub Manager<br/>
    Ashma Shaik</b></p>
    Contact   - +918114125679<br/>
    What'sapp - +918114125679
    <br/>
    <p ><b>Sub Manager<br/>
    Kalangi Sadvika</b></p>
    Contact   - +918114125679<br/>
    What'sapp - +918114125679
    <br/>


          </form>
          {/*  */}
        </div>
      </div>
    </>
  );
};
export default Contact;