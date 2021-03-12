// import firebase from 'firebase/app';
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

import { GoogleSignInButton } from '@components/atoms/auth/GoogleSignInButton';

export const SignInModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button w={24} variant="outline" onClick={onOpen}>
        ログイン
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <GoogleSignInButton />
          </ModalBody>

          <ModalFooter>{/* <Button variant="ghost">Secondary Action</Button> */}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
