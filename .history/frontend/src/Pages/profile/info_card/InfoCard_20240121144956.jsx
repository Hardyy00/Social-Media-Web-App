import { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../../../components/profile_modal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

export default function InfoCard() {
  const useDispatch = useDispatch();
  const params = useParams();

  const { id: userId } = params;

  const user = useSelector((state) => state.auth.authData);

  const [profileUser, setProfileUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (userId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await fetch("http://localhost:8080");
      }
    };
  });
  return (
    <div className="info_card">
      <div className="info_head">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" />
        </div>
      </div>

      <div className="info_me">
        <span>
          <b>Status </b>
        </span>
        <span>Single</span>
      </div>

      <div className="info_me">
        <span>
          <b>Lives in </b>
        </span>
        <span> Agra</span>
      </div>

      <div className="info_me">
        <span>
          <b>Works at </b>
        </span>
        <span>BBC</span>
      </div>

      <button className="btn logout_btn">Logout</button>
    </div>
  );
}
