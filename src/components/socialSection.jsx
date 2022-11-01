import "../styles/main.css";
import slackIcon from "../assets/slack.png";
import githubIcon from "../assets/github.png";

function SocialSection() {
  return (
    <section className="social__section">
      <a href="#">
        <img src={slackIcon} />
      </a>
      <a href="https://github.com/Andrew-ezeani/">
        <img src={githubIcon} />
      </a>
    </section>
  );
}

export default SocialSection;
