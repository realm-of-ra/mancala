import CONFIG from '@/constants/config'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const apollo_client = new ApolloClient({
  uri: CONFIG.GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
})

export default apollo_client
