import "../styles/main.css";
import profileImg from "../assets/Device=Web, State=Focused.png";
import shareIcon from "../assets/Icon.png";
import mobileShareIcon from "../assets/AvatarShareButton.png";
function ProfileSection() {
  return (
    <div className="profile__section">
      <img src={profileImg} alt="picture of a woman" id="profile__img" />
      <p id="twitter">Alwaysgreen18</p>
      <p id="slack">Andrew Ezeani</p>
      <div className="profile__share">
        <img src={mobileShareIcon} className="share-icon-m" />
        <img src={shareIcon} className="share-icon" />
      </div>
    </div>
  );
}

export default ProfileSection;
