import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import Cookies from 'js-cookie';

export const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Cookies.get('customer_access_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const clientRequest = (methodType: any) => {
  let website;

  website = 'http://localhost:4000';
  const link = ApolloLink.from([
    errorLink,
    authLink.concat(
      createHttpLink({
        uri: website,
        fetchOptions: {
          method: methodType,
        },
      })
    ),
  ]);

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
};
