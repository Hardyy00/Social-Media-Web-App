import { useEffect, useState } from "react";
import { followers } from "../../dummy_data/dummy_followers";
import Person from "./Person";

import "./followerscard.css";

export default function FollowersCard() {

  const url = "http://localhost:8080/user";

  const [followers, setFollowers] = useState([]);

  useEffect(()=>{

    const fetchUsers = async ()=>{

      try{
        const response = await fetch(url);

        const users = await response.json();

        return users;

      } catch(err){
        console.log(err);

        return [];
      }
    }

    fetchUsers().then((data)=> setFollowers(data));


  },[]);
  return (
    <div className="followers_card">
      <h3>Who is following you</h3>
      {followers.map(user=><Person key={foll._id} user={foll} />)}
    </div>
  );
}
{followers.map((foll) => )}
