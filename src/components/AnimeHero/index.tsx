interface Props {
  backgroundImage: string,
  backgroundColor: string
}

const AnimeHero = ({ backgroundImage, backgroundColor } : Props) => {
  return (
    <div className="anime-hero">
      <img src={backgroundImage} alt="hero_image.png"/>
    </div>
  )
}

export default AnimeHero