import { followers } from "../../dummy_data/dummy_followers";

import "./followerscard.css";

export default function FollowersCard() {
  return (
    <div className="followers_card">
      <h3>Who is following you</h3>
      {followers.map((foll) => {
        return (
         
        );
      })}
    </div>
  );
}
