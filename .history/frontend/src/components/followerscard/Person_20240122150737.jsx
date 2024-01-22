/* eslint-disable react/prop-types */

import { useState } from "react";
import { useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";

export default function Person({ user }) {
  const url = "http://localhost:8080/images/";

  const mainUser = useSelector((state) => state.auth.authData);

  const [follow, setFollow] = useState(mainUser.followers.includes(user._id));

  const followHandler = (event) => {
    setFollow((pre) => !pre);

    dispatch(followAndUnfollowUser(user._id));
  };

  return (
    <div key={user.id} className="follower">
      <div>
        <img
          src={
            user.profileImage
              ? url + user.profileImage
              : url + "defaultProf.png"
          }
          className="follower_img"
        />

        <div className="info">
          <span>
            {user.firstName} {user.lastName}
          </span>
          <span>{user.username}</span>
        </div>
      </div>

      <button className="btn follow_btn" onClick={followHandler}>
        {follow ? "Unfollow" : "follow"}
      </button>
    </div>
  );
}
