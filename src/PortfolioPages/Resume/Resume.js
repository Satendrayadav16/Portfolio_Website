import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import index from "react-typical";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
    { label: "Training", logoSrc: "training.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 75 },
    { skill: "MongoDB", ratingPercentage: 40 },
    { skill: "Express JS", ratingPercentage: 40 },
    { skill: "Node JS", ratingPercentage: 40 },
    { skill: "HTML & CSS", ratingPercentage: 80 },
    { skill: "Solidity", ratingPercentage: 50 },
    { skill: "Blockchain", ratingPercentage: 25 },
  ];

  const projectDetails = [
    {
      title: "Hospital Bot(Chatbot) ",
      duration: { fromDate: "08/2020", toDate: "09/2020" },
      description:
        "Web-based chatbot built with the purpose to assist the people with appointment details and info about the available doctors of a particular hospital.",
      subHeading: "Technologies Used: HTML, CSS, Node js, React.",
    },
    {
      title: "Digital Certificate Verification System",
      duration: { fromDate: "07/2021", toDate: "10/2021" },
      description:
        "A Blockchain based project built with the purposes to digitally verify digital credentials and store it.",
      subHeading:
        "Technologies Used: Blockchain, Smart contract & Solidity, React JS, Nodejs",
    },
    {
      title:
        "Centarllized Blockchain based banking transaction using Digital currency ",
      duration: { fromDate: "06/2022", toDate: "09/2022" },
      description:
        "A private-Blockchain based project built with the purposes to digitize the banking transaction using digital currency.",
      subHeading:
        "Technologies Used: Blockchain, React JS, Nodejs, Expressjs, MongoDB, Material UI, ",
    },
    // {
    //   title: "Personal Portfolio Website",
    //   duration: { fromDate: "2023", toDate: "Present" },
    //   description:
    //     "A Personal Portfolio website to showcase all my details, projects, my work experience and skills at one place.",
    //   subHeading: "Technologies Used: React JS, Bootsrap, Material UI",
    // },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={" Nepal College of Information Technology"}
        subHeading={" Bachelor of Engineering in Computer Engineering"}
        fromDate={"2017"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={" Capital higher secondary school"}
        subHeading={"HSEB(Biology)"}
        fromDate={"2014"}
        toDate={"2016"}
      />

      <ResumeHeading
        heading={" Shree Sankat Mochan D. R. secondary school"}
        subHeading={" SLC"}
        fromDate={"2004"}
        toDate={"2014"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Freelancer"}
          subHeading={"React Developer"}
          fromDate={"11/2022"}
          toDate={"01/2023"}
        />

        <ResumeHeading
          heading={"Nep Innovation Technology Pvt. Ltd."}
          subHeading={"React Developer"}
          fromDate={"03/2022"}
          toDate={"11/2023"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            Work as a Front-end programmer
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and frontend dev, i also love to teach people what i know."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with. I do prefer romantic and lo-fi genre."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in virtual world game like PUBG, pushing the rank and having interactive gaming sessions excites me the most."
      />

      <ResumeHeading
        heading="Cricket"
        description="This sports is emotion for me as i love cricket more than any sports and had represented U-16 & U-19 regional teams in the past."
      />
    </div>,

    /*Training */

    <div className="resume-training">
      <ResumeHeading
        heading="AGILE AND SCRUM"
        description="By Alexy Subbotin"
      />

      <ResumeHeading
        heading="EXTREME PROGRAMMING"
        description="By Alexy Subbotin"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt=""
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };
  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading
          title={"Resume💼"}
          subHeading={"My formal Bio Details"}
        />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
