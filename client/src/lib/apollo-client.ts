<<<<<<< HEAD
import CONFIG from "@/lib/config";
import { ApolloClient, InMemoryCache } from "@apollo/client";
=======
import CONFIG from '@/lib/config'
import { ApolloClient, InMemoryCache } from '@apollo/client'
>>>>>>> origin/timeout-fe-patch

const apollo_client = new ApolloClient({
  uri: CONFIG.GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default apollo_client;
