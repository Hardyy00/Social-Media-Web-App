/* eslint-disable react/prop-types */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followAndUnfollowUser } from "../../store/authSlice";
import { MdVerified } from "react-icons/md";

export default function Person({ user }) {
  const url = "http://localhost:8080/images/";

  const dispatch = useDispatch();

  const mainUser = useSelector((state) => state.auth.authData);

  const [follow, setFollow] = useState(mainUser.followings.includes(user._id));

  // eslint-disable-next-line no-unused-vars
  const followHandler = (event) => {
    dispatch(followAndUnfollowUser(user._id, mainUser._id, follow));

    setFollow((pre) => !pre);
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
          <span style={{ display: "flex" }}>
            {user.firstName} {user.lastName}
            <MdVerified style={{ marginLeft: "3px", color: "blue" }} />
          </span>
          <span>{user.username}</span>
        </div>
      </div>

      <button
        className={`  ${follow ? "active" : "follow_btn btn"}`}
        onClick={followHandler}
      >
        {follow ? "Unfollow" : "follow"}
      </button>
    </div>
  );
}
