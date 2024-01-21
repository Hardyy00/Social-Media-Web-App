import coverimage from "../../assets/cover2.jpg";
import profileimage from "../../assets/my_phot.jpg";
import { useSelector } from "react-redux";
import "./ProfileCard.css";

export default function ProfileCard() {
  const url = "http://localhost:8080/images/";

  const { user } = useSelector((state) => state.auth.authData);
  const isProfilePage = false;
  return (
    <div className="profilecard">
      <div className="profile_images">
        <img
          src={user ? url + user.coverImage : url + "defaultBack.jpg"}
          alt="Cover Image"
        />
        <img
          src={user ? url + user.profileImage : url + "defaultProf.png"}
          alt="Profile Image"
        />
      </div>

      <div className="profile_name">
        <span>
          {user.firstName}
          {user.lastName}
        </span>
        <span>Competitive Programmer</span>
      </div>

      <div className="follow_status">
        <hr />
        <div>
          <div className="follow">
            <span>{user.followings.length}</span>
            <span>Followings</span>
          </div>

          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>

          {isProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {!isProfilePage && <span>My Profile</span>}
    </div>
  );
}
