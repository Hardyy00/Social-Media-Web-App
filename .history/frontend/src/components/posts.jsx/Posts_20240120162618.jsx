import { useSelector } from "react-redux";
import Post from "./Post";
import "./Posts.css";

export default function Posts() {
  // const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post key={post._id} postInfo={post} />;
      })}
    </div>
  );
}
