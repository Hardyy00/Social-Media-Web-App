// eslint-disable-next-line react/prop-types
function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    ></Modal>
  );
}

// <form className="infoForm">
//         <h3>Your info</h3>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="FirstName"
//             placeholder="First Name"
//           />

//           <input
//             type="text"
//             className="infoInput"
//             name="LastName"
//             placeholder="Last Name"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="worksAT"
//             placeholder="Works at"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="livesIN"
//             placeholder="LIves in"
//           />

//           <input
//             type="text"
//             className="infoInput"
//             name="Country"
//             placeholder="Country"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             placeholder="RelationShip Status"
//           />
//         </div>

//         <div>
//           Profile Image
//           <input type="file" name="profileImg" />
//           Cover Image
//           <input type="file" name="coverImg" />
//         </div>

//         <button className="button infoButton">Update</button>
//       </form>

export default ProfileModal;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
