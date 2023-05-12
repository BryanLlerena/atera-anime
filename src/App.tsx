import Layout from './components/Layout'
import Router from './Router'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink } from "@apollo/client"
import './App.scss'

const backendUrl = import.meta.env.API_URL;

const httpLink = new HttpLink({ uri: backendUrl });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('auth_token');
  operation.setContext({
    headers: {
      authorization: token? token:''
    }
  })
  return forward(operation)
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        {Router}
      </Layout>
    </ApolloProvider>
  )
}

export default App