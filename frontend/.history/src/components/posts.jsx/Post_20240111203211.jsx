import share from "../../assets/share.png";
import comment from "../../assets/comment.png";
import like from "../../assets/like.png";
import notlike from "../../assets/notlike.png";

import "./Post.css";
export default function Post({ postInfo }) {
  return (
    <div className="post">
      <img src={postInfo.img} alt="" />
      <div className="post_react">
        <img src={} alt="" />
        <img src={} alt="" />
        <img src={} alt="" />

      </div>
    </div>
  );
}
