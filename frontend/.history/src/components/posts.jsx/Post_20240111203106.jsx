import share from "../../assets/share.png";
import share from "../../assets/comment.png";
import share from "../../assets/share.png";

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
