import gmail from "./icons/gmail.png";
import linkedin from "./icons/linkedin.png";
import facebook from "./icons/facebook.png";
import { Link } from "react-router-dom";

import "../styles/Contact.css";
const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <h1 style={{ color: "white" }}>Contact us</h1>
      <div className="contact-me">
        <span>
          Got questions or feedback? Let's chat! Reach out to me via the
          Social-media below. I'm always eager to connect and discuss new
          opportunities.
        </span>
        <div className="social-media">
          <Link
            to={"https://www.linkedin.com/in/taha-abdelkrim-douik-2b782b156/"}
          >
            <img src={linkedin} alt="" />
          </Link>
          <a href="mailto:douikkarim9@gmail.com">
            <img src={gmail} alt="" />
          </a>
          <Link
            to={"https://www.facebook.com/Karimdouik1/"}
          >
            <img src={facebook} alt="" />
          </Link>        </div>
      </div>
    </div>
  );
};

export default Contact;
