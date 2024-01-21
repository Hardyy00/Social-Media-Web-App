/* eslint-disable react/prop-types */
import share from "../../assets/share.png";
import comment from "../../assets/comment.png";
import like from "../../assets/like.png";
import notlike from "../../assets/notlike.png";

import "./Post.css";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function Post({ postInfo }) {
  // const user = useSelector((state) => state.auth.authData);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(postInfo.likes);
  return (
    <div className="post">
      <img
        src={
          postInfo.image ? `http://localhost:8080/images/${postInfo.image}` : ""
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
