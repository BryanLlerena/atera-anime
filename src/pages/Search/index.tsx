import { useState, useEffect } from 'react'
import { useLazyQuery } from "@apollo/client"
import Loader from '../../components/Loader'
import { MEDIA_LIST } from '../../graphql/listGQL'
import { IPageMedia } from '../../types/pageList'
import './styles.scss'

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
              <p key={i}>
                {anime.title.userPreferred} <b>({anime.type.toLowerCase()})</b>
              </p>
            )):
            <Loader/>
          }
        </div>
      </div>

      <div className='result--container'>

      </div>
    </div>
  )
}

export default SearchPage