import profilePic from "../../assets/my_phot.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

import { useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function PostShare() {
  const userId = useSelector((state) => state.auth.authData.userId);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const descRef = useRef();

  function imageHandler(event) {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage(img); // convert raw file to object url
      console.log(img);
    }
  }

  const resetImage = () => {
    setImage(null);
    imageRef.current.files = null;
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      userId,
      desc: descRef.current.value,
    };

    descRef.current.value = "";

    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
    }
  };

  return (
    <div className="post_share">
      <img src={profilePic} alt="Profile Img." />
      <div>
        <input
          type="text"
          placeholder="Write Something!"
          ref={descRef}
          required
        />
        <div className="post_options">
          <div
            className="post_options_icon"
            style={{ color: "var(--photo" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="post_options_icon" style={{ color: "var(--video" }}>
            <UilPlayCircle />
            Video
          </div>
          <div
            className="post_options_icon"
            style={{ color: "var(--location" }}
          >
            <UilLocationPoint />
            Location
          </div>
          <div
            className="post_options_icon"
            style={{ color: "var(--schedule" }}
          >
            <UilSchedule />
            Schedule
          </div>

          <button className="btn share_btn" onClick={handlePostSubmit}>
            Share
          </button>

          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={imageHandler}
            />
          </div>
        </div>

        {image && (
          <div className="preview_image">
            <UilTimes onClick={resetImage} />

            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
