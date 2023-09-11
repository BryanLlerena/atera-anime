import { useState, useEffect } from 'react'
import { useLazyQuery } from "@apollo/client"
import { MEDIA_LIST } from '../../graphql/listGQL'
import { IPageMedia } from '../../types/pageList'
import './styles.scss'
//Components
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import AnimeCard from '../../components/AnimeCard'

const SearchPage = () => {
  const [ searchValue, setSearchValue ] = useState('')
  // const [ filterValue, setFilterValue ] = useState({
  //   type: 'ANIME',
  //   isAdult: false
  // })
  const [ getMediaQuery, { loading, error, data }] = useLazyQuery<{
    media: IPageMedia,
  }>(MEDIA_LIST, { 
      fetchPolicy: 'no-cache',
      variables: {
        search: searchValue,
        // isAdult: filterValue.isAdult,
        // type: filterValue.type
      }
    }
  )

  useEffect(()=> {
    getMediaQuery()
  },[searchValue])

  return (
    <Layout>
      <div className="search-page--container">
        <div className='search--container'>
          <label className='search-bar-label'>
            Buscar por nombre:
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
              placeholder='Buscar anime, manga o novela ligera ...'
              className='search-bar'
            />
          </label>

          {/* <div className='search-filter'>
            <p>Filtrar Búsqueda</p>
            <label>
              Tipo:
              <select defaultValue='ANIME' onChange={(e) => setFilterValue(values => ({...values, type: e.target.value}))}>
                <option value='ANIME|MANGA'>Todo</option>
                <option value='MANGA'>Manga</option>
                <option value='ANIME'>Anime</option>
              </select>
            </label>

            <label>
              <input type='checkbox' onChange={(e) => setFilterValue(values => ({...values, isAdult: e.target.checked}))}/>
              +18
            </label>
          </div> */}

          <div className='search-result'>
            {!loading && !error && data && data.media ?
              data.media.media.map((anime,i) => (
                <p key={i} onClick={() => setSearchValue(anime.title.userPreferred)}>
                  {anime.title.userPreferred} <b>({anime.type.toLowerCase()})</b>
                </p>
              )):
              <Loader/>
            }
          </div>
        </div>

        <div className='result--container'>
          <div className='result-content'>
            { data && data.media ?
              data.media.media.map((anime,i) => (
                <AnimeCard
                  key={i}
                  pathCard={anime.id}
                  title={anime.title.romaji.toLowerCase()}
                  image={anime.coverImage.large}
                  size='small'
                  type={anime.type.toLowerCase()}
                />
              )):
              <Loader/>
            }
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default SearchPage