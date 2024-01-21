/* eslint-disable react/prop-types */
import { useEffect } from "react";
import share from "../../assets/share.png";
import comment from "../../assets/comment.png";
import like from "../../assets/like.png";
import notlike from "../../assets/notlike.png";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { likeAndUnlike } from "../../store/postSlice";
export default function Post({ postInfo }) {
  const user = useSelector((state) => state.auth.authData);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(
    isNaN(postInfo.likes) ? 0 : postInfo.likes.length
  );

  useEffect(() => {
    if (postInfo.likes) {
      setLikes(postInfo.likes.length);
    }
    if (postInfo.likes && postInfo.likes.includes(user._id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [postInfo]);
  const dispatch = useDispatch();

  const likeHandler = () => {
    dispatch(likeAndUnlike(user._id, postInfo._id));
  };
  return (
    <div className="post">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <img
          src={
            postInfo.image
              ? `http://localhost:8080/images/${postInfo.image}`
              : ""
          }
        />
      </div>

      <div className="post_react">
        <img
          src={isLiked ? like : notlike}
          style={{ cursor: "pointer" }}
          onClick={likeHandler}
        />
        <img src={comment} />
        <img src={share} />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
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
