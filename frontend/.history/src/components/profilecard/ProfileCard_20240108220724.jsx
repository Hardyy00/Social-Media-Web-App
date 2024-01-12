import coverimage from "../../assets/cover.jpg";
import profileimage from "../../assets/profileImg.jpg";
import "./ProfileCard.css";

export default function ProfileCard() {
  return (
    <div className="profilecard">
      <div className="profile_images">
        <img src={coverimage} alt="Cover Image" />
        <img src={profileimage} alt="Profile Image" />
      </div>

      <div className="profile_name">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className=""></div>
    </div>
  );
}
