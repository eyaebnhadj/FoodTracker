import { Stack } from "expo-router"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
    uri: 'https://plounevez.us-east-a.ibm.stepzen.net/api/right-shrimp/__graphql',
    cache: new InMemoryCache(),
    headers:{
        "Authorization": "apikey plounevez::local.net+1000::18e00a0401d779b158da75369f4b09907691f4ef1ff5ebe94277937fd93fed30"

    }

  });

const RootLayout = () => {
  return <ApolloProvider client={client}><Stack />
  </ApolloProvider>;
};

export default RootLayout