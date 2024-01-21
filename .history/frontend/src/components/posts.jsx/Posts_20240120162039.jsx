import { useDispatch, useSelector } from "react-redux";
import { postsData } from "../../dummy_data/posts";
import Post from "./Post";
import "./Posts.css";

export default function Posts() {
  // const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post key={post.id} postInfo={post} />;
      })}
    </div>
  );
}
