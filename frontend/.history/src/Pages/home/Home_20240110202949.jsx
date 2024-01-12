import PostSide from "../../components/postside/PostSide";
import ProfileSide from "../../components/profileside/ProfileSide";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide/>
      <div className="rightSide">RightSide</div>
    </>
  );
}
