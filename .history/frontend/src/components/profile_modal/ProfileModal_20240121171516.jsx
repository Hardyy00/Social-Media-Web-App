/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./ProfileModal.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  outline: "0",
};

// eslint-disable-next-line react/prop-types
export default function ProfileModal({ modalOpened, setModalOpened, data }) {
  const { password, ...other } = data;
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const dispatch = useDispatch();
  const params = useParams();
  const user = useSelector((state) => state.auth.authData);

  const updateHandler = (event) => {
    event.preventDefault();

    setModalOpened(false);
  };

  const imageHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }

    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
    }
  };

  return (
    <div>
      <Modal
        open={modalOpened}
        onClose={() => setModalOpened(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="prof" onSubmit={updateHandler}>
            <h3 style={{ marginInline: "auto" }}>Your info</h3>

            <div className="row">
              <input
                type="text"
                className="infoInput"
                name="firstName"
                placeholder="First Name"
              />

              <input
                type="text"
                className="infoInput"
                name="lastName"
                placeholder="Last Name"
              />
            </div>

            <div className="row">
              <input
                type="text"
                className="infoInput"
                name="worksAt"
                placeholder="Works at"
              />
            </div>

            <div className="row">
              <input
                type="text"
                className="infoInput"
                name="livesIn"
                placeholder="LIves in"
              />

              <input
                type="text"
                className="infoInput"
                name="country"
                placeholder="Country"
              />
            </div>

            <div className="row">
              <input
                type="text"
                className="infoInput"
                placeholder="RelationShip Status"
                name="relationStatus"
              />
            </div>

            <div className="row" style={{ justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <label htmlFor="">Profile Image</label>
                <input
                  type="file"
                  name="profileImage"
                  onChange={imageHandler}
                />
              </div>
              <div style={{ display: "flex" }}>
                <label htmlFor="">Cover Image</label>
                <input type="file" name="coverImage" onChange={imageHandler} />
              </div>
            </div>

            <div className="row">
              <div
                onClick={() => setModalOpened(false)}
                className="btn"
                style={{
                  width: "20rem",
                  padding: "1rem",
                  fontSize: "1rem",
                  alignSelf: "center",
                }}
              >
                Close
              </div>

              <button
                className="btn"
                style={{
                  width: "20rem",
                  padding: "1rem",
                  fontSize: "1rem",
                  alignSelf: "center",
                }}
              >
                Update
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
