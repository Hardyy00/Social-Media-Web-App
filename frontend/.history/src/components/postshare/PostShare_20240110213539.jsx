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
        <div className="post_options">
          <div className="post_options_icon" style={{ color: "var(--photo" }}>
            <UilScenery />
            Photo
          </div>
          <div className="post_options_icon" style={{ color: "var(--video" }}>
            <UilPlayCircle />
            Video
          </div>
          <div
            className="post_options_icon"
            style={{ color: "var(--location" }}
          >
            <UilLocationPoint />
            Location
          </div>
          <div
            className="post_options_icon"
            style={{ color: "var(--schedule" }}
          >
            <UilSchedule />
            Schedule
          </div>

          <button className="btn"> Share</button>
        </div>
      </div>
    </div>
  );
}
