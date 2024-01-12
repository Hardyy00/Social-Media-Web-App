import PostSide from "../../components/postside/PostSide";
import ProfileSide from "../../components/profileside/ProfileSide";
import { RightSide } from "../../components/right_side/RightSide";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
}
