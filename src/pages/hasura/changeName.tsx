import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import { Layout } from '@components/templates/Layout';
import {
  useCurrentUserNameMutation,
  useGetCurrentUserNameQuery,
  useGetCurrentUserNameLazyQuery,
} from '@infra/graphql/generated/graphql';
import { CurrentUser } from '@models/CurrentUser';
import { currentUserState } from '@states/currentUser';
import { ChangeEvent, useEffect, useState, VFC } from 'react';
import { useRecoilState } from 'recoil';

const Index = () => {
  const [currentUser] = useRecoilState(currentUserState); // グローバルステートからcurrentUserを取り出す
  const [name, setName] = useState<string>('');
  const [buttonVariable, setButtonVariable] = useState<boolean>(false);
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
    // const onClickLogin = () => login(userId);

    if (error) {
      console.error(error);
      return <span>Error!</span>;
    }
    if (data) {
      const changeName = async (name: string) => {
        if (data.users_by_pk) {
          setButtonVariable(true);

          await userNameMutation({
            variables: { id: data.users_by_pk?.id, name },
          });
          setButtonVariable(false);
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
              isLoading={buttonVariable}
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
