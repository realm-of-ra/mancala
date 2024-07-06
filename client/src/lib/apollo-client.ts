import { ApolloClient, InMemoryCache } from '@apollo/client'

const apollo_client = new ApolloClient({
  uri: 'https://api.cartridge.gg/x/mancala/torii/graphql',
  cache: new InMemoryCache(),
})

export default apollo_client
