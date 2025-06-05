import { Link } from "react-router-dom";
import { certifications } from "../utils/internshipsComp";
import "./Certifications.css";
const Certifications = () => {
  return (
    <div className="certifications-container">
  <div className="certifications-header">
    <h1 className="certifications-title">Latest Certifications</h1>
  </div>

  <div className="certifications-card">
    <div className="certifications-list">
      {certifications.map((certificate, index) => (
        <div key={index} className="certification-item">
          <div className="certification-icon-container">
            <img
              src={certificate.icon}
              alt={certificate.company}
              className="certification-icon"
            />
          </div>
          <div className="certification-details">
            <Link
              to="https://trainings.internshala.com/s/v/2105648/342ced0b"
              className="certification-link"
            >
              {certificate.certificateName}
            </Link>
            <p className="certification-company">{certificate.company}</p>
            <p className="certification-description">{certificate.desc}</p>
            <hr className="certification-divider" />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Certifications;
