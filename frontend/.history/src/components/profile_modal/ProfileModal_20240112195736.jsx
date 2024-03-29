import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

export default function ProfileModal({ m }) {
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
        <form action="">
          <h3>Your Info</h3>
        </form>
      </Modal>
    </>
  );
}
