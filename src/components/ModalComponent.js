import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";
import NewTask from "../components/NewTask";
const ModalComponent = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent ml={3} mr={3}>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <NewTask onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
