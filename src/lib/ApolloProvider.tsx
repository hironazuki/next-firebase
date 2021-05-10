import { memo, ReactNode, VFC } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  split,
  HttpLink,
  ApolloProvider as Provider,
  from,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import jwt_decode, { JwtPayload } from 'jwt-decode';

import { currentUserState } from '@states/currentUser';
import { CurrentUser } from '@models/CurrentUser';

import { setContext } from '@apollo/client/link/context';

type Props = {
  children: ReactNode;
};

const createApolloClient = (
  currentUser: CurrentUser | null | undefined,
  setCurrentUser: SetterOrUpdater<CurrentUser | null | undefined>,
) => {
  let token: any;
  if (currentUser && !token) {
    token = currentUser.token;
  }
  // const headers = token ? { Authorization: `Bearer ${token}` } : {};
  const authLink = setContext((_, { headers }) =>
    // return the headers to the context so httpLink can read them
    token
      ? {
          headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      : {},
  );
  const httpLink = new HttpLink({
    // uri: 'https://next-firebase-auth.herokuapp.com/v1/graphql',
    uri: `https://${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`,
    // headers,
  });

  const wsLink = process.browser
    ? new WebSocketLink({
        uri: `wss://${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`,
        // uri: 'wss://next-firebase-auth.herokuapp.com/v1/graphql',
        options: {
          reconnect: true,
          // connectionParams: { headers },
        },
      })
    : null;

  const splitLink =
    process.browser && wsLink
      ? split(
          ({ query }) => {
            const definition = getMainDefinition(query);
            return (
              definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
            );
          },
          wsLink,
          httpLink,
        )
      : httpLink;

  const refreshLink = new TokenRefreshLink({
    // accessTokenField: 'newToken',
    // No need to refresh if token exists and is still valid

    isTokenValidOrUndefined: () => {
      if (!currentUser) {
        return true;
      }

      // No need to refresh if token exists and is valid
      try {
        const expiration = jwt_decode<JwtPayload>(token).exp;
        if (Date.now() >= expiration! * 1000) {
          return false;
        } else {
          return true;
        }
      } catch (error) {
        return false;
      }
    },
    fetchAccessToken: async () => {
      // Use fetch to access the refreshUserToken mutation
      const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_FIREBASE_REFRESHLINK}?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            grant_type: 'refresh_token',
            refresh_token: currentUser!.refresh_token,
          }),
        },
      );
      return response;
    },
    handleFetch: (newToken) => {
      // save new authentication token to state
      if (currentUser) {
        setCurrentUser({ ...currentUser, token: newToken });
        token = newToken;
      }
    },
    handleError: (error) => {
      console.error('Cannot refresh access token:', error);
    },
  });

  return new ApolloClient({
    link: from([refreshLink, authLink, splitLink]),
    cache: new InMemoryCache({}),
  });
};

export const ApolloProvider: VFC<Props> = memo((props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState); // グローバルステートからcurrentUserを取り出す

  const client = createApolloClient(currentUser, setCurrentUser);

  return <Provider client={client}>{children}</Provider>;
});
