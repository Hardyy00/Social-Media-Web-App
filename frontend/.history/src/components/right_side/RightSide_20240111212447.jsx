import "./RightSide.css";
import home from "../../assets/home.png";
import notification from "../../assets/noti.png";
import comment from "../../assets/comment.png";
import { UilSetting } from "@iconscout/react-unicons";

export function RightSide() {
  return (
    <div className="right_side">
      <div className="nav_icons">
        <img src={home} alt="" />
        <img src={UilSetting} alt="" />
        <img src={notification} alt="" />
        <img src={comment} alt="" />
      </div>
    </div>
  );
}
