import { VFC } from 'react';
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
  Stack,
  Text,
} from '@chakra-ui/react';

import { GoogleSignInButton } from '@components/atoms/auth/GoogleSignInButton';
import { TwitterSignInButton } from '@components/atoms/auth/TwitterSignInButton';
import { AnonymousSignInButton } from '@components/atoms/auth/AnonymousSignInButton';

export const SignInModal: VFC = () => {
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
          <ModalBody textAlign="center">
            <Stack>
              <GoogleSignInButton />
              <TwitterSignInButton />
            </Stack>
          </ModalBody>

          <ModalFooter>{/* <Button variant="ghost">Secondary Action</Button> */}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
