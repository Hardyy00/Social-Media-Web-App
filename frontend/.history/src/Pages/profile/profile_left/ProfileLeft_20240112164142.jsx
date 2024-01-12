import LogoSearch from "../../../components/logosearch/LogoSearch";
import "./ProfileLeft.css";

export default function ProfileLeft() {
  return (
    <div className="profile_left">
      <LogoSearch />
      <InfoCard />
    </div>
  );
}
