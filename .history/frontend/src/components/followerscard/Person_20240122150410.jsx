/* eslint-disable react/prop-types */

import { useState } from "react";

export default function Person({ user }) {
  const url = "http://localhost:8080/images/";

  const [follow, setFollow] = useState(user.followers.include(user._id));

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

      <button className="btn follow_btn">
        {follow ? "Unfollow" : "follow"}
      </button>
    </div>
  );
}
