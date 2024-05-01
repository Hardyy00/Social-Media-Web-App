import "./RightSide.css";
import home from "../../assets/home.png";
import notification from "../../assets/noti.png";
import comment from "../../assets/comment.png";
import TrendCard from "./trend_card/TrendCard";
import { useNavigate } from "react-router";
import { GiLaurelCrown } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import useRazorpay from "react-razorpay";
import axios from "axios";
import { authActions } from "../../store/authSlice";

export function RightSide() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [RazorPay] = useRazorpay();

  const { isVerified, username, userId } = useSelector((state) => {
    return {
      isVerified: state.auth.authData.isVerified,
      username: state.auth.authData.username,
      userId: state.auth.authData._id,
    };
  });

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
      key,
      amount: +order.amount,
      currency: "INR",
      name: "Aditya Gupta",
      description: "Test Transaction",
      image:
        "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png",
      order_id: order.id,
      handler: async (response) => {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
          response;

        const { data, status } = await axios.post(
          "http://localhost:8080/api/verifyPayment",
          { razorpay_payment_id, razorpay_order_id, razorpay_signature, userId }
        );

        if (data.success) {
          dipatch(authActions.updateAuthData(data.user));
        }
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: username, //your customer's name
        email: "h@g.com",
        contact: "3535355343", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new RazorPay(options);
    rzp1.open();
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
