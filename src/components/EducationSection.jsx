import React from "react";
import school from "../assets/school.jpeg";
import parul from "../assets/parul.jpeg";
import college from "../assets/college.jpeg";
import "./EducationSection.css";

const EducationSection = () => {
  return (
    <div className="education-section-container">
      <div className="education-list">
        {/* Parul University */}
        <div className="education-item">
          <img src={parul} alt="Parul University" className="education-logo" />
          <div className="education-details">
            <div className="education-row">
              <div>
                <div className="education-title">
                  Parul University, Vadodara, Gujarat
                </div>
                <div className="education-degree">
                  Btech in Computer Science and Engineering (AI)
                </div>
              </div>
              <div className="education-date">
                August 2022 - Present
              </div>
            </div>
            <div className="education-desc">
              From 2022 to 2026, I have remained actively enrolled in a full-time engineering degree program.
            </div>
          </div>
        </div>
        {/* Alphores Junior College */}
        <div className="education-item">
          <img src={college} alt="Alphores Junior College" className="education-logo" />
          <div className="education-details">
            <div className="education-row">
              <div>
                <div className="education-title">
                  Alphores Junior College, Karimnager, Telangana
                </div>
                <div className="education-degree">
                  12<sup>th</sup> Class
                </div>
              </div>
              <div className="education-date">
                June 2020 - May 2022
              </div>
            </div>
            <div className="education-desc">
              From 2020 to 2022, I was enrolled in 12<sup>th</sup> grade and course were MPC.
            </div>
          </div>
        </div>
        {/* Odyssey The School */}
        <div className="education-item">
          <img src={school} alt="Odyssey The School" className="education-logo" />
          <div className="education-details">
            <div className="education-row">
              <div>
                <div className="education-title">
                  Odyssey The School, Karimnagr, Telangana
                </div>
                <div className="education-degree">
                  10<sup>th</sup> Class
                </div>
              </div>
              <div className="education-date">
                June 2019 - June 2020
              </div>
            </div>
            <div className="education-desc">
              From 2019 to 2020, I was enrolled in 10<sup>th</sup> grade.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;