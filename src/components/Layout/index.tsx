import Header from '../Header'
import Sidebar from '../Sidebar'
import './layout.scss'

interface Props {
  children: JSX.Element
}

const Layout = ({ children } : Props) => {
  return(
    <div className="layout--container">
      {/* <div className='layout-header'>
        <Header/>
      </div> */}
      <div className='layout-sidebar'>
        <Sidebar/>
      </div>

      <div className='layout-content'>
        {children}
      </div>
    </div>
  )
}

export default Layout