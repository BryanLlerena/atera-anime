import './styles.scss'

interface Props {
  currentPage: number,
  hasNextPage: boolean,
  lastPage: number,
  total: number
}

const Pagination = ({ currentPage, hasNextPage, lastPage, total } : Props) => {


  
  return (
    <div className="pagination--container">
      
    </div>
  )
}

export default Pagination