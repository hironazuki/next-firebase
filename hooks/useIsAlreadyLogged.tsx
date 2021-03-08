import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCurrentUser } from './useCurrentUser';
import { useToast } from '@chakra-ui/react';
export const useIsAlreadylogged = () => {
  const { currentUser, isAuthChecking } = useCurrentUser();
  const router = useRouter();
  // const toast = useToast();

  useEffect(() => {
    if (isAuthChecking) return; // まだ確認中
    if (currentUser) {
      //   toast({
      //     position: 'top-right',
      //     title: '既にログインしています。',
      //     // description: '',
      //     status: 'error',
      //     duration: 9000,
      //     isClosable: true,
      //   });
      console.log(router.query.redirect_to);
      if (router.query.redirect_to) {
        router.push(`${router.query.redirect_to}`);
      } else {
        router.push('/'); // ログインだったのでリダイレクト
      }
    }
  }, [currentUser]);
};
