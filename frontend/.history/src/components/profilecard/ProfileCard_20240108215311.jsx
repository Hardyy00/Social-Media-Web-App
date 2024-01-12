import coverimage from "../../assets/cover.jpg";
import profileimage from "../../assets/cover.jpg";

export default function ProfileCard() {
  return (
    <div className="profilecard">
      <div className="profile_images">
        <img src={coverimage} alt="Cover Image" />
        <img src={profileimage} alt="Profile Image" />
      </div>
    </div>
  );
}
