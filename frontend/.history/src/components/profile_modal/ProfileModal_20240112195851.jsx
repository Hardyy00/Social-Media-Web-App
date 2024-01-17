import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

// eslint-disable-next-line react/prop-types
export default function ProfileModal({ modalOpened, setModalOpened }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form action="">
          <h3>Your Info</h3>
        </form>
      </Modal>
    </>
  );
}
