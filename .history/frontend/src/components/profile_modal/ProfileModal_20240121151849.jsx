import { Modal, MantineProvider } from "@mantine/core";

// eslint-disable-next-line react/prop-types
export default function ProfileModal({ modalOpened, setModalOpened }) {
  return (
    <MantineProvider>
      <Modal
        opened={modalOpened}
        onClose={setModalOpened}
        title="Update Profile"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form className="info_form">
          <h3>Your info</h3>
        </form>
      </Modal>
    </MantineProvider>
  );
}
