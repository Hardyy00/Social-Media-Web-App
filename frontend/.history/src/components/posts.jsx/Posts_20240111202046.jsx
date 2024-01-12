import { postsData } from "../../dummy_data/posts";
import Post from "./Post";
import "./Posts.css";

export default function Posts() {
  return (
    <div className="posts">
      {postsData.map((post) => {
        return <Post />;
      })}
    </div>
  );
}
