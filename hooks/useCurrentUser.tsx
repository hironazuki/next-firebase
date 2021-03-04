import { useRecoilValue } from 'recoil';
import { currentUserState } from 'states/currentUser';

export function useCurrentUser() {
  const currentUser = useRecoilValue(currentUserState); // グローバルステートからcurrentUserを取り出す

  return {
    currentUser,
  };
}
