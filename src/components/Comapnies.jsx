import Marquee from "react-fast-marquee";
// import udemy from "../assets/Udemy-Logo.png";
// import octanet from "../assets/octanet.jpeg";
// import bharat_intern from "../assets/bharat_intern.jpeg";
// import techplement from "../assets/techplement.jpeg";
// import codeclause from "../assets/codeclause.png";
// import ducat from "../assets/ducat.png";
// import internpay from "../assets/internpay.png";
// import internspedia from "../assets/internspedia.png";
// import lgm from "../assets/letsgrowmore.png";
// import nexus from "../assets/nexusbyte.png";
// import oasis from "../assets/oasis.png";
// import prodigy from "../assets/prodigy.png";
// import systemtron from "../assets/systemtron.png";
// import tcsion from "../assets/tcsion.webp";
// import technocolabs from "../assets/technocolabs.png";
// import twilearn from "../assets/twilearn.png";
// import txon from "../assets/txon.png";
// import mentor from "../assets/mentorbox.png";
// import instaPost from "../assets/instaPic.png";
// import { Link } from "react-router-dom";
// import byteXL from "../assets/bytexl.jpeg";
import "./Companies.css";

const Comapnies = () => {
  return (
   <div className="companies-container">
  <h1 className="companies-title">Companies</h1>
  <p className="companies-subtitle">
    My portfolio reflects a journey of continuous learning, growth, and dedication to excellence.
  </p>
  <Marquee pauseOnHover={true}>
    <div className="marquee-content">
      {/* Replace your cards here */}
      {/* Example card */}
      {/* <div className="company-card">
        <img src={udemy} alt="Udemy" className="company-image" />
      </div> */}
      {/* More cards */}
    </div>
  </Marquee>
  {/* Social media container */}
  <div className="social-media-container">
    {/* Social content */}
  </div>
  </div>

  );
};

export default Comapnies;
