import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";
import Phone from "../../../src/images/phone.png";
import Email from "../../../src/images/email.png";
import Address from "../../../src/images/address.png";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ollvm3q",
        "template_yk5zy65",
        formRef.current,
        "a66Nn8RGkyMVzmczO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets keep In Touch"} title={"Contact me📱"} />
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +977 98-178 97008
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                satendrayadav963@gmail.com
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Address} alt="" />
                Kathmandu, Nepal
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What’s your story?</b> Get in touch. You need a beautiful
              design for your website. <br /> Leave a Request
            </p>

            <form ref={formRef}>
              <input
                style={{ backgroundColor: "#" }}
                type="text"
                required
                placeholder="Name"
                name="user_name"
              />
              <input
                style={{ backgroundColor: "#" }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                style={{ backgroundColor: "#" }}
                type="email"
                required
                placeholder="someone@gmail.com"
                name="user_email"
              />
              <textarea
                style={{ backgroundColor: "" }}
                rows="5"
                placeholder="Message"
                name="message"
              />
              <button onSubmit={handleSubmit}>Submit</button>
              {done && "Thank you for Contacting..."}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
