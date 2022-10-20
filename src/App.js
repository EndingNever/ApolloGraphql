import './App.css';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import GetUsers from './components/GetUsers';

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3001/graphql" })
])

const client = new ApolloClient({
  cache: new InMemoryCache,
  uri: "http://localhost:3001/graphql"
  // link: link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <GetUsers />
    </ApolloProvider>
  );
}

export default App;
