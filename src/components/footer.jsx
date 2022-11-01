import "../styles/main.css";
import zuriLogo from "../assets/zuri.png";
import dot from "../assets/dot.png";
import ingressiveLogo from "../assets/I4G.png";

function Footer() {
  return (
    <div className="footer">
      <div className="zuri-logo">
        <img src={zuriLogo} alt="zuri logo" />
        <img src={dot} alt="Image of a red dot" />
      </div>
      <p className="footer__text">HNG Internship 9 Frontend Task</p>
      <img src={ingressiveLogo} alt="14G logo" />
    </div>
  );
}

export default Footer;
