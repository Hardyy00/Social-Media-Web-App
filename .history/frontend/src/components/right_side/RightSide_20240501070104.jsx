import "./RightSide.css";
import home from "../../assets/home.png";
import notification from "../../assets/noti.png";
import comment from "../../assets/comment.png";
import TrendCard from "./trend_card/TrendCard";
import { useNavigate } from "react-router";
import { GiLaurelCrown } from "react-icons/gi";

export function RightSide() {
  const navigate = useNavigate();

  return (
    <div className="right_side">
      <div className="nav_icons">
        <img
          style={{ cursor: "pointer" }}
          src={home}
          alt=""
          onClick={() => navigate("/home")}
        />
        <GiLaurelCrown style={{ fontSize: "1rem" }} />
        <img src={notification} alt="" />
        <img src={comment} alt="" />
      </div>

      <TrendCard />

      <button className="btn main_share_button">Share</button>
    </div>
  );
}
