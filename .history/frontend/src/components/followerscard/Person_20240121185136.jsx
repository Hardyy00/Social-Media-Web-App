/* eslint-disable react/prop-types */

export default function Person({ user }) {
  return (
    <div key={user.id} className="follower">
      <div>
        <img src={user.img} className="follower_img" />

        <div className="info">
          <span>{user.name}</span>
          <span>@{user.username}</span>
        </div>
      </div>

      <button className="btn follow_btn">Follow</button>
    </div>
  );
}
