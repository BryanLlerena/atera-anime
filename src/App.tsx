import Layout from './components/Layout'
import Router from './Router'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink } from "@apollo/client"
import './App.scss'

// const backendUrl = import.meta.env.BASE_URL;

const httpLink = new HttpLink({ uri: 'https://graphql.anilist.co' });

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
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