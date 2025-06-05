import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaAngleRight, FaLinkedin } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      {/* //!Contact section Start */}
      <div className="footer-flex">
        <div className="footer-left">
          <div>
            <h1 className="footer-title">Contact Me</h1>
          </div>
          <div>
            <form className="footer-form" netlify method="POST">
              <div className="footer-form-row">
                <label htmlFor="name" className="footer-label">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Name Here"
                  id="name"
                  name="name"
                  className="footer-input"
                />
              </div>
              <div className="footer-form-row">
                <label htmlFor="mobile" className="footer-label">
                  Mobile No.
                </label>
                <input
                  type="number"
                  required
                  placeholder="Enter Ph. Number Here"
                  id="mobile"
                  name="mobile"
                  className="footer-input"
                />
              </div>
              <div className="footer-form-row">
                <label htmlFor="email" className="footer-label">
                  Email Id
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter Email Here"
                  id="email"
                  name="email"
                  className="footer-input"
                />
              </div>
              <div className="footer-form-row">
                <label htmlFor="purpose" className="footer-label">
                  Message
                </label>
                <textarea
                  required
                  name="purpose"
                  id="purpose"
                  cols="30"
                  rows="5"
                  className="footer-textarea"
                  placeholder="Enter Message Here"
                ></textarea>
              </div>
              <div className="footer-submit-row">
                <button className="footer-submit-btn" type="submit">
                  Submit
                  <FaAngleRight />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="footer-right">
          <div>
            <h1 className="footer-title">Contact Details</h1>
          </div>
          <div className="footer-contact-card">
            <div className="footer-contact-row email">
              <MdEmail size={30} />
              <a href="mailto:madupusainikhil@gmail.com">
                madupusainikhil@gmail.com
              </a>
            </div>
            <div className="footer-contact-row phone">
              <IoCall size={30} />
              <a href="tel:9346765689">
                +91 9346765689 / +91 9948093173
              </a>
            </div>
            <div className="footer-contact-row linkedin">
              <FaLinkedin size={30} />
              <Link
                to={"https://www.linkedin.com/in/madupu-sainikhil-151928275/"}
                target="_blank"
              >
                Madupu Sai Nikhil
              </Link>
            </div>
            <div className="footer-contact-row address">
              <FaAddressBook size={30} />
              <span>Karimnagar, Telangana, India</span>
            </div>
          </div>
        </div>
      </div>
      {/* //!Contact section End */}
    </div>
  );
};

export default Footer;