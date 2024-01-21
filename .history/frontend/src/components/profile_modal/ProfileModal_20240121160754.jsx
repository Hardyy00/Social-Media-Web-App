// eslint-disable-next-line react/prop-types
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./ProfileModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  outline: "0",
};

// eslint-disable-next-line react/prop-types
export default function ProfileModal({ modalOpened, setModalOpened }) {
  const updateHandler = (event) => {
    event.preventDefault();
    setModalOpened(false);
  };

  return (
    <div>
      <Modal
        open={modalOpened}
        onClose={setModalOpened}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="" onSubmit={updateHandler}>
            <h3>Your info</h3>

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
              />
            </div>

            <div className="row">
              Profile Image
              <input type="file" name="profileImage" />
              Cover Image
              <input type="file" name="coverImage" />
            </div>

            <button className="button infoButton">Update</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
