import {
  Button,
  Flex,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import { Layout } from '@components/templates/Layout';
import {
  useLoveMutation,
  useUnloveMutation,
  usePl_With_LoveSubscription,
  useVoteMutation,
} from '@repository/graphql/generated/graphql';
import { currentUserState } from '@states/currentUser';
import Link from 'next/link';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
const Index = () => {
  const [currentUser] = useRecoilState(currentUserState); // グローバルステートからcurrentUserを取り出す
  const { error, data } = usePl_With_LoveSubscription();
  const [loveMutation] = useLoveMutation();
  const [unLoveMutation] = useUnloveMutation();
  const [voteMutation] = useVoteMutation();
  const [buttonVariable, setButtonVariable] = useState<boolean>(false);

  const vote = async (name: string) => {
    setButtonVariable(true);
    await voteMutation({
      variables: { name },
    });
    setButtonVariable(false);
  };

  const unLove = async (name: string) => {
    setButtonVariable(true);
    await unLoveMutation({
      variables: { name },
    });
    setButtonVariable(false);
  };
  const love = async (name: string) => {
    setButtonVariable(true);
    await loveMutation({
      variables: { name },
    });
    setButtonVariable(false);
  };

  if (error) {
    console.error(error);
    return <span>Error!</span>;
  }
  if (data) {
    return (
      <>
        <Link href="/hasura/changeName">名前変えに行く</Link>
        <Wrap>
          {data.programming_language.map((pg) => (
            <WrapItem
              bg="telegram.100"
              m={10}
              key={pg.name}
              shadow="lg"
              borderRadius="xl"
              p={10}
              mx="auto"
            >
              <Stack>
                <Heading>{pg.name}</Heading>
                <Text fontSize="lg">totalVote: {pg.vote_count}</Text>
                <Text fontSize="lg">totalLove: {pg.loved_languages.length}</Text>
                <Flex>
                  <Button onClick={() => vote(pg.name)} isLoading={buttonVariable} mr={4}>
                    vote
                  </Button>

                  {currentUser && (
                    <Stack>
                      {pg.loved_languages.some((d) => d.user.id === currentUser.uid) ? (
                        <Button
                          onClick={() => unLove(pg.name)}
                          isLoading={buttonVariable}
                          colorScheme="gray"
                          _hover={{ opacity: '0.8' }}
                        >
                          unLove
                        </Button>
                      ) : (
                        <Button
                          onClick={() => love(pg.name)}
                          isLoading={buttonVariable}
                          // bgColor="pink.100"
                          colorScheme="pink"
                          _hover={{ opacity: '0.8' }}
                        >
                          love
                        </Button>
                      )}
                    </Stack>
                  )}
                </Flex>
                {pg.loved_languages.length && (
                  <UnorderedList>
                    <Text>好きな人ら</Text>
                    {pg.loved_languages.map((user) => (
                      <ListItem key={user.user.id} color="gray.500">
                        {user.user.name}
                      </ListItem>
                    ))}
                  </UnorderedList>
                )}
              </Stack>
            </WrapItem>
          ))}
        </Wrap>
      </>
    );
  }
  return <span>Loading...</span>;
};

Index.Layout = Layout;

export default Index;
