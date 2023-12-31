import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { MEDIA_BY_ID } from '../../graphql/listGQL'
// Components
import Layout from '../../components/Layout'
import AnimeHero from '../../components/AnimeHero'
import Loader from '../../components/Loader'
import { IMedia } from '../../types/pageList'
import './styles.scss'

const AnimeView = () => {
  const params = useParams()

  const { loading, error, data } = useQuery<{
    Media: IMedia,
  }>(MEDIA_BY_ID, { 
      fetchPolicy: 'no-cache',
      variables: {
        id: params.id
      }
    }
  )

  return (
    <Layout>
      <div className="anime-view--container">
        { !loading && !error && data && data.Media ?
          <div className='anime-view--content'>
            <AnimeHero
              backgroundImage={data.Media.bannerImage}
              backgroundColor={data.Media.coverImage.color}
            />
            <h2></h2>
          </div>:
          <Loader/>
        }
      </div>
    </Layout>
  )
}

export default AnimeView