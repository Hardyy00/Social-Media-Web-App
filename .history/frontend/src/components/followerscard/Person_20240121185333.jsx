/* eslint-disable react/prop-types */

export default function Person({ user }) {
  const url = "`http://localhost:8080/images/";
  return (
    <div key={user.id} className="follower">
      <div>
        <img
          src={
            user.profileImage ? url + user.profileImage : "defaultProfile.png"
          }
          className="follower_img"
        />

        <div className="info">
          <span>{user.name}</span>
          <span>@{user.username}</span>
        </div>
      </div>

      <button className="btn follow_btn">Follow</button>
    </div>
  );
}
