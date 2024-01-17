import { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../../../components/profile_modal/ProfileModal";

export default function InfoCard() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="info_card">
      <div className="info_head">
        <h4>Your Info</h4>
        <div onClick={(pre) => setModalOpened(!pre)}>
          <UilPen width="2rem" height="1.2rem" />

          {modalOpened && <ProfileModal openModal={modalOpened} />}
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
