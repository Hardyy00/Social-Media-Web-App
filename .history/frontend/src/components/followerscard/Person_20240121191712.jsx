/* eslint-disable react/prop-types */

export default function Person({ user }) {
  const url = "http://localhost:8080/images/";

  console.log(user);
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

      <button className="btn follow_btn">Follow</button>
    </div>
  );
}
