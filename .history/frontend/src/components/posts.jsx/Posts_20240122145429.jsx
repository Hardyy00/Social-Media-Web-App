import { useSelector } from "react-redux";
import Post from "./Post";
import "./Posts.css";
import { useParams } from "react-router";

export default function Posts() {
  const params = useParams();
  // const dispatch = useDispatch();
  let posts = useSelector((state) => state.post.posts);

  const user = useSelector((state) => state.auth.authData);

  let newPosts;

  if (params.id) {
    newPosts = posts.filter((item) => item.userId === user._id);
    posts = newPosts;
  }

  console.log(posts);

  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post key={post._id} postInfo={post} />;
      })}
    </div>
  );
}
