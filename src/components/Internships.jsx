import { internshipOpp } from "../utils/internshipsComp";
import "./Internships.css";

const Internships = () => {
  return (
    <div className="internships-container">
      <div className="internships-header">
        <h1 className="internships-title">Latest Experience</h1>
      </div>

      <div className="internships-content">
        <div className="internship-list">
          {internshipOpp.map((internship, index) => (
            <div key={index} className="internship-item">
              <div className="internship-logo-container">
                <img
                  src={internship.icon}
                  alt={internship.company}
                  className="internship-logo"
                />
              </div>
              <div className="internship-details">
                <div className="internship-header">
                  <p className="internship-company">{internship.company}</p>
                </div>

                <p className="internship-title">{internship.title}</p>
                <p className="internship-desc">{internship.desc}</p>

                <hr className="internship-divider" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internships;
