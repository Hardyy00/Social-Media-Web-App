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
    const amount = 1000;

    const {
      data: { key },
    } = await axios.get("http://localhost:8080/api/getKey");
    const {
      data: { order },
    } = await axios.post("http://localhost:8080/api/pay", {
      amount,
    });

    const options = {
      key: "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
      amount: +order.amount,
      currency: "INR",
      name: "Hardik Gaur", //your business name
      description: "Test Transaction",
      image:
        "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png",
      order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
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
            className="pay-btn"
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
