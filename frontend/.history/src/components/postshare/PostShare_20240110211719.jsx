import profilePic from "../../assets/profileImg.jpg";
import "./PostShare.css";
export default function PostShare() {
  return (
    <div className="post_share">
      <img src={profilePic} alt="Profile Im." />
      <div>
        <input type="text" placeholder="Write Something!" />
      </div>
    </div>
  );
}
