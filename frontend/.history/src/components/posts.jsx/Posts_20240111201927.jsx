import { postsData } from "../../dummy_data/posts";
import "./Posts.css";

export default function Posts() {
  return (
    <div className="posts">
      {postsData.map((post) => {
        return <Post></Post>;
      })}
    </div>
  );
}
