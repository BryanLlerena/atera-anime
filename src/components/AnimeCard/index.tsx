import './animeCard.scss'

interface Props {
  title: string,
  image: string,
}

const AnimeCard = ({ title, image } : Props ) => {
  return(
    <div className="anime-card--basic">
      <div className="card-image">
        <img src={image} />
      </div>
      <div className="card-text">
        <h5>{title}</h5>
      </div>
    </div>
  )
}

export default AnimeCard