import FollowersCard from "../../../components/followerscard/FollowersCard";
import LogoSearch from "../../../components/logosearch/LogoSearch";
import InfoCard from "../info_card/InfoCard";
import {MantineProvider}
import "./ProfileLeft.css";

export default function ProfileLeft() {
  return (
    <div className="profile_left">
      <LogoSearch />
      <MantineProvider>
       
        <InfoCard />
      </MantineProvider>
      <FollowersCard />
    </div>
  );
}
