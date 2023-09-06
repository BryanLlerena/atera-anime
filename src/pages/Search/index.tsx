import { useState, useEffect } from 'react'
import { useLazyQuery } from "@apollo/client"
import { MEDIA_LIST } from '../../graphql/listGQL'
import { IPageMedia } from '../../types/pageList'
import './styles.scss'
//Components
import Loader from '../../components/Loader'
import AnimeCard from '../../components/AnimeCard'
import ReactPaginate from 'react-paginate'

const SearchPage = () => {
  const [ searchValue, setSearchValue ] = useState('')
  const [ getMediaQuery, { loading, error, data }] = useLazyQuery<{
    media: IPageMedia,
  }>(MEDIA_LIST, { 
      fetchPolicy: 'no-cache',
      variables: {
        search: searchValue
      }
    }
  )

  console.log(loading, error, data)

  useEffect(()=> {
    getMediaQuery()
  },[searchValue])

  return (
    <div className="search-page--container">
      <div className='search--container'>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
          placeholder='Buscar anime, manga o novela ligera ...'
          className='search-bar'
        />

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
              />
            )):
            <Loader/>
          }
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          // onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={3000}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  )
}

export default SearchPage