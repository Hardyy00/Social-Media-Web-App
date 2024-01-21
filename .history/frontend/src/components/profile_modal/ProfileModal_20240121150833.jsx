import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

export default function ProfileModal({ modalOpened, setModalOpened }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form className="info_form">
          <h3>Your info</h3>
        </form>
      </Modal>
    </>
  );
}
