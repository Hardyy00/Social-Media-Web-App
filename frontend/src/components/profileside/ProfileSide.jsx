import FollowersCard from "../followerscard/FollowersCard";
import LogoSearch from "../logosearch/LogoSearch";
import ProfileCard from "../profilecard/ProfileCard";
import "./ProfileSide.css";
export default function ProfileSide() {
  return (
    <div className="profileside">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
}
