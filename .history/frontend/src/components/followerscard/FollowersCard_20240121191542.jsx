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

  console.log(followers);
  return (
    <div className="followers_card">
      <h3>Who is following you</h3>
      {followers.map((person) => {
        if (person._id !== user._id) {
          console.log(person);
          <Person key={person._id} user={person} />;
        }
      })}
    </div>
  );
}
