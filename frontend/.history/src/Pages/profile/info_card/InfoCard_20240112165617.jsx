import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";

export default function InfoCard() {
  return (
    <div className="info_card">
      <div className="info_head">
        <h4>Your Info</h4>
        <UilPen />
      </div>

      <div className="info_me">
        <span>
          <b>Status</b>
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
        <span> BBC</span>
      </div>

      <button className="btn">Logout</button>
    </div>
  );
}
