import "./RightSide.css";
import home from "../../assets/home.png";
import notification from "../../assets/noti.png";
import comment from "../../assets/comment.png";
import TrendCard from "./trend_card/TrendCard";
import { useNavigate } from "react-router";
import { GiLaurelCrown } from "react-icons/gi";
import { useSelector } from "react-redux";
import axios from "axios";

export function RightSide() {
  const navigate = useNavigate();

  const isVerified = useSelector((state) => state.auth.authData.isVerified);

  const handlePayment = async () => {
    const {} = await axios.post("http://localhost:8080/pay", {
      amount,
    });
  };

  return (
    <div className="right_side">
      <div className="nav_icons">
        <img
          style={{ cursor: "pointer" }}
          src={home}
          alt=""
          onClick={() => navigate("/home")}
        />
        {!isVerified && (
          <GiLaurelCrown
            style={{ fontSize: "2rem", color: "blue" }}
            onClick={handlePayment}
          />
        )}
        <img src={notification} alt="" />
        <img src={comment} alt="" />
      </div>

      <TrendCard />

      <button className="btn main_share_button">Share</button>
    </div>
  );
}
