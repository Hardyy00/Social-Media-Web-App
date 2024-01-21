import { useState, useEffect } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../../../components/profile_modal/ProfileModal";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function InfoCard() {
  const [modalOpened, setModalOpened] = useState(false);

  const params = useParams();

  const { id: userId } = params;

  const user = useSelector((state) => state.auth.authData);

  const [profileUser, setProfileUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (userId === user._id) {
        return user;
      } else {
        const profileUser = await fetch(`http://localhost:8080/user/${userId}`);

        const resData = await profileUser.json();

        return resData;
      }
    };

    fetchProfile().then((data) => {
      setProfileUser(data);
    });
  }, [userId, user]);

  return (
    <div className="info_card">
      <div className="info_head">
        <h4>Profile Info</h4>
        {user._id === userId && (
          <div onClick={() => setModalOpened(true)}>
            <UilPen width="2rem" height="1.2rem" />

            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            />
          </div>
        )}
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
