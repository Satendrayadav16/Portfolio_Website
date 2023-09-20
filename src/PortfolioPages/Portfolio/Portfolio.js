import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Portfolio.css";
import DCVS from "../../../src/images/DCVS.jpg";
import CBBBTDC from "../../../src/images/CBBBTDC.png";
import Chatbot from "../../../src/images/Chatbot.png";

import "swiper/css";

import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";

export default function Portfolio(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className="portfolio" id="portfolio">
      <div className="main-container fade-in" id={props.id || ""}>
        <ScreenHeading subHeading={"Recent Projects"} title={"Portfolios📷"} />
      </div>

      <div class="container">
        <div class="row">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                href="https://github.com/Satendrayadav16/chatbot_for_hospital"
                target="_blank"
                rel="noopener noreferrer"
                class="thumbnail"
                data-image={Chatbot}
                data-target="#image-gallery"
              >
                <img
                  class="img-thumbnail"
                  src={Chatbot}
                  alt="Another alt text"
                ></img>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                href="https://github.com/Satendrayadav16/DCVS"
                target="_blank"
                rel="noopener noreferrer"
                class="thumbnail"
                data-image={DCVS}
                data-target="#image-gallery"
              >
                <img
                  class="img-thumbnail"
                  src={DCVS}
                  alt="Another alt text"
                ></img>
              </a>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                href="https://github.com/Satendrayadav16/Centrallized-Blockchain-based-Banking-Transaction-using-Digital-Currency"
                target="_blank"
                rel="noopener noreferrer"
                class="thumbnail"
                data-image={CBBBTDC}
                data-target="#image-gallery"
              >
                <img
                  class="img-thumbnail"
                  src={CBBBTDC}
                  alt="Another alt text"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
