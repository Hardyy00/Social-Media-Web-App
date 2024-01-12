import "./Profile.css";
import ProfileLeft from "./profile_left/ProfileLeft";

export default function Profile() {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="middle"></div>
    </div>
  );
}
