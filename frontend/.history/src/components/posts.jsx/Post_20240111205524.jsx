/* eslint-disable react/prop-types */
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
        <img src={postInfo.liked ? like : notlike} />
        <img src={comment} />
        <img src={share} />
      </div>

      <span>{postInfo.likes} likes</span>

      <div className="detail">
        <span>
          <b>{postInfo.name}</b>
        </span>
        <span>{postInfo.desc}</span>
      </div>
    </div>
  );
}
