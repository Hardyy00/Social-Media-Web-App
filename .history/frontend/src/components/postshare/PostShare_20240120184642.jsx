import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { postActions } from "../../store/postSlice";

import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const url = "http://localhost:8080/images/";

export default function PostShare() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.authData._id);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const descRef = useRef();
  const isSubmitting = useSelector((state) => state.post.loading);
  const user = useSelector((state) => state.auth.authData);

  function imageHandler(event) {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage(img); // convert raw file to object url
    }
  }

  const reset = () => {
    setImage(null);
    imageRef.current.files = null;
  };

  const handlePostSubmit = async (event) => {
    event.preventDefault();

    if (descRef.current.value.trim() === "") {
      return;
    }
    dispatch(postActions.setLoading(true));

    const newPost = {
      userId,
      desc: descRef.current.value,
    };

    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;

      try {
        const uploader = async (data) => {
          await fetch("http://localhost:8080/upload", {
            method: "POST",
            body: data,
          });
        };

        const uploadPostData = async (data) => {
          const postData = await fetch("http://localhost:8080/post", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          const resData = await postData.json();

          return resData;
        };

        uploader(data);

        // eslint-disable-next-line no-unused-vars
        const postData = await uploadPostData(newPost);

        dispatch(postActions.addPost(postData));

        reset();
        descRef.current.value = "";
        dispatch(postActions.setLoading(false));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="post_share">
      <img
        src={
          user.profileImage ? url + user.profileImage : url + "defaultProf.png"
        }
        alt="Profile Img."
      />
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

          <button
            className="btn share_btn"
            onClick={handlePostSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sharing..." : "Share"}
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
            <UilTimes onClick={reset} />

            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
