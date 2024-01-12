import { followers } from "../../dummy_data/dummy_followers";

export default function FollowersCard() {
  return (
    <div className="followerscard">
      <h3>Who is following you</h3>
      {followers.map((followers) => {
        return <div className="follower">"Ok sir"</div>;
      })}
    </div>
  );
}
