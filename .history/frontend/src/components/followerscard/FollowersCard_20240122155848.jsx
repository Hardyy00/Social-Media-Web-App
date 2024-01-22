import { useEffect, useState } from "react";
import Person from "./Person";

import "./followerscard.css";
import { useSelector } from "react-redux";

export default function FollowersCard() {
  const url = "http://localhost:8080/user";

  const [followers, setFollowers] = useState([]);

  const user = useSelector((state) => state.auth.authData);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);

        const users = await response.json();

        return users;
      } catch (err) {
        console.log(err);

        return [];
      }
    };

    fetchUsers().then((data) => setFollowers(data));
  }, []);

  return (
    <div className="followers_card">
      <h3>People You may want to follow</h3>
      {followers.map((person) => {
        if (person._id !== user._id) {
          return <Person key={person._id} user={person} />;
        }
      })}
    </div>
  );
}
