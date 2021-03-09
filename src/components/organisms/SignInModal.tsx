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

// import { useSetRecoilState } from 'recoil';
// import { currentUserState } from '../../../../states/currentUser';

// export const SignOutButton = () => {
//   const setCurrentUser = useSetRecoilState(currentUserState);

//   const Logout = () => {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         window.location.reload();
//       });
//     setCurrentUser(null);
//   };

//   return (
//     <Button colorScheme="teal" variant="solid" onClick={() => Logout()}>
//       ログアウト
//     </Button>
//   );
// };

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
