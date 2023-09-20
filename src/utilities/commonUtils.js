import Home from "../PortfolioPages/Home/Home";
import About from "../PortfolioPages/About/About";
import Resume from "../PortfolioPages/Resume/Resume";
import Contact from "../PortfolioPages/Contact/Contact";
import Portfolio from "../PortfolioPages/Portfolio/Portfolio";
import Work from "../PortfolioPages/Work/Work";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About",
    component: About,
  },

  {
    screen_name: "Resume",
    component: Resume,
  },

  {
    screen_name: "Portfolio",
    component: Portfolio,
  },

  {
    screen_name: "Experience",
    component: Work,
  },

  {
    screen_name: "Contact",
    component: Contact,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
