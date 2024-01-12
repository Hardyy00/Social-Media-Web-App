import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";

export default function InfoCard() {
  return (
    <div className="info_card">
      <div className="info_head">
        <h4>Your Info</h4>
        <UilPen />
      </div>

      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span>In RelationShip</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Agra</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Agra</span>
      </div>
    </div>
  );
}
