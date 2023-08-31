import { useQuery } from "@apollo/client"
import Loader from "../../components/Loader"
import { ANIME_LIST,MEDIA_TREND_LIST, TRENDING_ANIME } from "../../graphql/listGQL"
import { IPageMedia, IPageMediaTrend } from '../../types/pageList'
// Components
import AnimeCard from "../../components/AnimeCard"
import HeroColumns from "../../components/HeroColumns"
import './home.scss'

const Home = () => {

  const { loading: loading_trending, error: error_trending, data: data_trending } = useQuery<{
    trending: IPageMedia,
    season: IPageMedia,
    nextSeason: IPageMedia,
    popular: IPageMedia,
    top: IPageMedia
  }>(TRENDING_ANIME, { 
      fetchPolicy: 'no-cache',
      variables: {
        nextSeason: "FALL",
        nextYear: 2023,
        season: "SUMMER",
        seasonYear: 2023,
        type: "ANIME"
      }
    }
  )

  const { loading: loading_trend, error: error_trend, data: data_trend } = useQuery<{
    Page: IPageMediaTrend
  }>(MEDIA_TREND_LIST, { 
      fetchPolicy: 'no-cache',
      variables: {page: 0, perPage: 6}
    }
  )
  
  const { loading, error, data } = useQuery<{
    Page: IPageMedia
  }>(ANIME_LIST, { 
      fetchPolicy: 'no-cache',
      variables: {page: 0, perPage: 20}
    }
  )

  console.log(loading_trending, error_trending, data_trending)

  return(
    <div className="home--container">
      {!loading_trend && !error_trend && data_trending && data_trending.season ? 
        <HeroColumns trend_data={data_trending.season.media}/>:
        <Loader/>
      }

      <div className="home--list">
        {!loading && !error && data && data.Page ? 
          data.Page.media.map((anime,i) => (
            <AnimeCard
              key={i}
              title={anime.title.romaji.toLowerCase()}
              image={anime.coverImage.large}
            /> 
          )):
          <Loader/>
        }
      </div>
    </div>
  )
}

export default Home