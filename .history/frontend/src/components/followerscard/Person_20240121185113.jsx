export default function Person() {
  return (
    <div key={foll.id} className="follower">
      <div>
        <img src={foll.img} className="follower_img" />

        <div className="info">
          <span>{foll.name}</span>
          <span>@{foll.username}</span>
        </div>
      </div>

      <button className="btn follow_btn">Follow</button>
    </div>
  );
}
