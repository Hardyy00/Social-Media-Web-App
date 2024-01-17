import PostSide from "../../components/postside/PostSide";
import ProfileModal from "../../components/profile_modal/ProfileModal";
import ProfileSide from "../../components/profileside/ProfileSide";
import { RightSide } from "../../components/right_side/RightSide";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <ProfileSide />
      <ProfileModal />
      <PostSide />
      <RightSide />
    </div>
  );
}
