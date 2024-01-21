import PostSide from "../../components/postside/PostSide";
import "./Profile.css";
import ProfileLeft from "./profile_left/ProfileLeft";
import ProfileCard from "../../components/profilecard/ProfileCard";
import { RightSide } from "../../components/right_side/RightSide";

export default function Profile() {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="middle">
        <ProfileCard />
        <PostSide />
      </div>

      <RightSide />
    </div>
  );
}
