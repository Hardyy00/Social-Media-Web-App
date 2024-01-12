import PostSide from "../../components/postside/PostSide";
import "./Profile.css";
import ProfileCard from "./profile_card/ProfileCard";
import ProfileLeft from "./profile_left/ProfileLeft";

export default function Profile() {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="middle">
        <ProfileCard />
        <PostSide />
      </div>
    </div>
  );
}
