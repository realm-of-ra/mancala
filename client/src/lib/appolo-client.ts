
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { onError } from "@apollo/client/link/error"

const appolink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
    alert("Something went wrong")
  }
}).concat(new HttpLink('https://api.cartridge.gg/x/mancala/torii/graphql'))

const client = new ApolloClient({
  uri: appolink,
  cache: new InMemoryCache(),
})

export default client

