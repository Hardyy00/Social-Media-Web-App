import ProfileSide from "../../components/profileside/ProfileSide";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <ProfileSide />
      <div className="postSide">Post</div>
      <div className="rightSide">RightSide</div>
    </div>
  );
}
