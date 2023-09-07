import './animeCard.scss'

interface Props {
  title: string,
  image: string,
  pathCard: string,
  size?: 'basic'|'small',
  type?: string,
}

const AnimeCard = ({ title, image, pathCard, size = 'basic', type } : Props ) => {
  return(
    <div className={`anime-card--${size}`}>
      <div className="card-image">
        <a href={pathCard} target='_blank'>
          <img src={image} />
        </a>
      </div>
      <div className="card-text">
        <a href={pathCard} target='_blank'>
          {size == 'basic' ?
            <h5 className='title'>{title}</h5>:
            <p className='title-small'>
              {title}
              <b>({type})</b>
            </p>
          }
        </a>
      </div>
    </div>
  )
}

export default AnimeCard