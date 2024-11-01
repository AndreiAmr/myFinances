import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
  cache: new InMemoryCache(),
});

const apolloClient = () => {
  if (!client) {
    throw new Error('DEU RUIM');
  }

  console.log('PASSEI DAQUI');

  return client;
};

export default apolloClient;
