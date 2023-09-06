import './animeCard.scss'

interface Props {
  title: string,
  image: string,
  pathCard: string
}

const AnimeCard = ({ title, image, pathCard } : Props ) => {
  return(
    <div className="anime-card--basic">
      <div className="card-image">
        <a href={pathCard} target='_blank'>
          <img src={image} />
        </a>
      </div>
      <div className="card-text">
        <a href={pathCard} target='_blank'>
          <h5>{title}</h5>
        </a>
      </div>
    </div>
  )
}

export default AnimeCard