import share from "../../assets/share.png";
import comment from "../../assets/comment.png";
import like from "../../assets/like.png";
import notlike from "../../assets/notlike.png";

import "./Post.css";
export default function Post({ postInfo }) {
  return (
    <div className="post">
      <img src={postInfo.img} />
      <div className="post_react">
        <img src={postInfo.likes ? like : notlike} />
        <img src={comment} />
        <img src={share} />
      </div>
    </div>
  );
}
