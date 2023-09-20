import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.facebook.com/satendra.16/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
              <a
                href="https://www.instagram.com/satendrayadav16/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                pointerE
                href=""
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Satendra Yadav</span>
              <span className="wave">👋</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  steps={[
                    "Front-end Developer 😎",
                    1000,
                    "React Dev 🌐",
                    1000,
                    "Javascript Dev 📱",
                    1000,
                    "Web3 Dev 💻",
                    1000,
                  ]}
                  loop={Infinity}
                />
              </h1>
              <span className="profile-role-tagline">
                <span>
                  Designing & developing the view according to user perspective
                </span>
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a
              href="https://www.linkedin.com/in/satendra-yadav-45a0671ab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn highlighted-btn">LinkedIn</button>
            </a>
            <a
              href="https://github.com/Satendrayadav16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn highlighted-btn ">
                Github
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
