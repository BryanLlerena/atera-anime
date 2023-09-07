import './styles.scss'

interface Props {
  currentPage: number,
  hasNextPage: boolean,
  lastPage: number,
  total: number
}

const Pagination = ({ currentPage, hasNextPage, lastPage, total } : Props) => {
  const pages : number[] = []

  for(let i = 1 ; i <= lastPage ; i++){
    pages.push(i)
  }

  return (
    <div className="pagination--container">
      {pages.map((page, i) => (
        <p key={i} className={`pagination-button ${currentPage == page ? 'active':''}`}>
          {page}
        </p>
      ))}
    </div>
  )
}

export default Pagination