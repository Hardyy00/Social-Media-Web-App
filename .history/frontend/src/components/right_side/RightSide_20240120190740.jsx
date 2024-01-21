import "./RightSide.css";
import home from "../../assets/home.png";
import notification from "../../assets/noti.png";
import comment from "../../assets/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "./trend_card/TrendCard";
import { Navigate } from "react-router";

export function RightSide() {
  return (
    <div className="right_side">
      <div className="nav_icons">
        <img
          style={{ cursor: "pointer" }}
          src={home}
          alt=""
          onClick={() => <Navigate to="../" />}
        />
        <UilSetting />
        <img src={notification} alt="" />
        <img src={comment} alt="" />
      </div>

      <TrendCard />

      <button className="btn main_share_button">Share</button>
    </div>
  );
}
