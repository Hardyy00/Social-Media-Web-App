import { useSelector } from "react-redux";
import "./ProfileCard.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileCard({ location }) {
  const url = "http://localhost:8080/images/";

  const user = useSelector((state) => state.auth.authData);
  const posts = useSelector((state) => state.post.posts);

  const [followers, setFollowers] = useState(user ? user.followers.length : 0);

  const [followings, setFollowings] = useState(
    user ? user.followings.length : 0
  );

  useEffect(() => {
    if (user) {
      setFollowers(user.followers.length);
      setFollowings(user.followings.length);
    }
  }, [user]);

  return (
    <div className="profilecard">
      <div className="profile_images">
        <img
          src={
            user.coverImage ? url + user.coverImage : url + "defaultBack.jpg"
          }
          alt="Cover Image"
        />
        <img
          src={
            user.profileImage
              ? url + user.profileImage
              : url + "defaultProf.png"
          }
          alt="Profile Image"
        />
      </div>

      <div className="profile_name">
        <span>
          {user.firstName + " "}
          {user.lastName}
        </span>
        <span>{user.worksAt ? user.worksAt : "Write about your self🖊️"}</span>
      </div>

      <div className="follow_status">
        <hr />
        <div>
          <div className="follow">
            <span>{followings}</span>
            <span>Following</span>
          </div>

          <div className="vl"></div>
          <div className="follow">
            <span>{followers}</span>
            <span>Followers</span>
          </div>

          {location === "profile" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {
                    posts.filter((post) => post.userID === user._id.toString())
                      .length
                  }
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {location === "home" && (
        <Link to={`/profile/${user._id}`}>
          <span>My Profile</span>
        </Link>
      )}
    </div>
  );
}
