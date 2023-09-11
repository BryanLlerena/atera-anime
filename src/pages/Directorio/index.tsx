import { useQuery } from "@apollo/client"
import { ANIME_LIST } from "../../graphql/listGQL"
// Components
import Layout from "../../components/Layout"
import './styles.scss'

const Directorio = () => {

  const { loading, error, data } = useQuery(ANIME_LIST, {
    fetchPolicy: 'no-cache',
    variables: {page: 0, perPage: 20}
  })

  console.log(loading,error, data)

  return(
    <Layout>
      <div className="home--container">
        <p>Home Page</p>
      </div>
    </Layout>
  )
}

export default Directorio