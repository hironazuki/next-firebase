import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

import { Layout } from '@components/templates/Layout';
import {
  useCurrentUserNameMutation,
  useGetCurrentUserNameLazyQuery,
} from '@repository/graphql/generated/graphql';
import { currentUserState } from '@states/currentUser';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const Index = () => {
  const [currentUser] = useRecoilState(currentUserState); // グローバルステートからcurrentUserを取り出す
  const [name, setName] = useState<string>('');
  const [userNameMutation, loading] = useCurrentUserNameMutation();
  const [getName, { data, error }] = useGetCurrentUserNameLazyQuery();

  useEffect(() => {
    if (currentUser) {
      getName({
        variables: {
          id: currentUser.uid,
        },
      });
    }
  }, [currentUser]);
  if (currentUser) {
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

    if (error) {
      console.error(error);
      return <span>Error!</span>;
    }
    if (data) {
      const changeName = async (name: string) => {
        if (data.users_by_pk) {
          await userNameMutation({
            variables: { id: data.users_by_pk?.id, name },
          });
          setName('');
        }
      };
      return (
        <Box>
          <Text mb={10}>今の名前: {data.users_by_pk?.name}</Text>
          <FormControl id="name">
            <FormLabel>名前</FormLabel>
            <Input placeholder="userName" value={name} onChange={onChangeName} />

            <Button
              onClick={() => changeName(name)}
              disabled={name === '' || name === data.users_by_pk?.name}
              mt={4}
              colorScheme="teal"
              isLoading={loading.loading}
              type="submit"
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      );
    }
  }
  return <span>Loading...</span>;
};

Index.Layout = Layout;

export default Index;
