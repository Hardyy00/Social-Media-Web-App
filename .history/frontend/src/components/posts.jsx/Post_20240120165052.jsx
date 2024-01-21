/* eslint-disable react/prop-types */
import share from "../../assets/share.png";
import comment from "../../assets/comment.png";
import like from "../../assets/like.png";
import notlike from "../../assets/notlike.png";

import "./Post.css";
import { useSelector } from "react-redux";
export default function Post({ postInfo }) {
  const user = useSelector((state) => state.auth.authData);
  return (
    <div className="post">
      <img
        src={
          
        }
      />
      <div className="post_react">
        <img src={postInfo.liked ? like : notlike} />
        <img src={comment} />
        <img src={share} />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {postInfo.likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{postInfo.name}</b>
        </span>
        <span> {postInfo.desc}</span>
      </div>
    </div>
  );
}
