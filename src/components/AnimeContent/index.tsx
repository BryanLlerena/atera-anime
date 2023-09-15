import { IMedia } from '../../types/pageList'
import './styles.scss'

interface Props {
  animeData: IMedia
}

const AnimeContent = ({ animeData } : Props) => {
  return (
    <div className="anime-content--container">
      <div className='anime-header'>
        <h2></h2>
      </div>
    </div>
  )
}

export default AnimeContent