import "./TrendCard.css";
import { dummy_trends } from "../../../dummy_data/dummy_trends";

export default function TrendCard() {
  return (
    <div className="trend_card">
      {dummy_trends.map((trend) => {
        return (
          <div className="trend">
            <span></span>
          </div>
        );
      })}
    </div>
  );
}
