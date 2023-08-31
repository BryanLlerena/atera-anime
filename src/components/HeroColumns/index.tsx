import { IMedia } from '../../types/pageList'
import parser from 'html-react-parser'
import './hero.scss'

interface Props {
  trend_data: IMedia[]
}

const HeroColumns = ({ trend_data } : Props) => {
  const bannerImages = trend_data.map((anime, i) => (anime))

  return(
    <div className="hero-columns--container">
      {bannerImages.map((anime, i) => (
        <div key={i} className="image--container">
          <img src={anime.coverImage.extraLarge} alt={anime.title.romaji}/>
          <div className='anime-text'>
            <h2 className='anime-title'>
              {anime.title.userPreferred}
            </h2>
            <p className='anime-description'>
              {parser(anime.description)}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HeroColumns