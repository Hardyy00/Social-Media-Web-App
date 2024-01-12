import "./TrendCard.css";
import { dummy_trends } from "../../../dummy_data/dummy_trends";

export default function TrendCard() {
  return (
    <div className="trend_card">
      <h3>Trends For you</h3>
      {dummy_trends.map((trend) => {
        return (
          <div key={trend.id} className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
}
