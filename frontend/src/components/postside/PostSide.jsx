import Posts from "../posts.jsx/Posts";
import PostShare from "../postshare/PostShare";
import "./PostSide.css";

export default function PostSide() {
  return (
    <div className="post_side">
      <PostShare />
      <Posts />
    </div>
  );
}
