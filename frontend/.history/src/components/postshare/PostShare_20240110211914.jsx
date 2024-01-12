import profilePic from "../../assets/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";

export default function PostShare() {
  return (
    <div className="post_share">
      <img src={profilePic} alt="Profile Im." />
      <div>
        <input type="text" placeholder="Write Something!" />
      </div>

      <div className="post_options"></div>
    </div>
  );
}
