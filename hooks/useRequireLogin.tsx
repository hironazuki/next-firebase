import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCurrentUser } from './useCurrentUser';
import { useToast } from '@chakra-ui/react';
export const useRequireLogin = () => {
  const { currentUser, isAuthChecking } = useCurrentUser();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (isAuthChecking) return; // まだ確認中
    if (!currentUser) {
      toast({
        position: 'top-right',
        title: 'ログインしてください',
        description: 'ログインが必要なページです。',
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
      // router.push('/'); // 未ログインだったのでリダイレクト

      router.push({
        pathname: '/login',
        query: { redirect_to: router.pathname },
      });
    }
  }, [currentUser]);
};
