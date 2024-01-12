import { followers } from "../../dummy_data/dummy_followers";

import "./followerscard.css";

export default function FollowersCard() {
  return (
    <div className="followerscard">
      <h3>Who is following you</h3>
      {followers.map((foll) => {
        return (
          <div key={foll.id} className="follower">
            <div>
              <img src={foll.img} className="follower_img" />

              <div className="info">
                <span>{foll.name}</span>
                <span>@{foll.username}</span>
              </div>
            </div>

            <button>Follow</button>
          </div>
        );
      })}
    </div>
  );
}
