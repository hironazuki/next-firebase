import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCurrentUser } from './useCurrentUser';
export const useIsAlreadylogged = () => {
  const { currentUser, isAuthChecking } = useCurrentUser();
  const router = useRouter();
  // const toast = useToast();

  useEffect(() => {
    if (isAuthChecking) return; // まだ確認中

    if (currentUser) {
      if (router.query.redirect_to) {
        router.push(`${router.query.redirect_to}`);
      } else {
        router.push('/'); // ログインだったのでリダイレクト
      }
    }
  }, [currentUser]);
};
