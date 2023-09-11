import { NavLink } from 'react-router-dom'
import { AiOutlineRise } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { BiShuffle } from 'react-icons/bi'
import { LiaHomeSolid } from 'react-icons/lia'
import { TbSearch } from 'react-icons/tb'
import { TfiVideoClapper } from 'react-icons/tfi'
import './sidebar.scss'

const Sidebar = () => {

  return (
    <div className="sidebar--container">
      <div className='logo--container'>

      </div>
      
      <div className='sidebar-menu'>
        <NavLink 
          to='/search-anime-manga/'
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}
        >
          <TbSearch size='25px' color='#FFFFFF'/>
        </NavLink>
        
        <NavLink
          to='/'
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}
        >
          <LiaHomeSolid size='25px' color='#FFFFFF'/>
        </NavLink>

        <NavLink
          to='/top-rated/'
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}
        >
          <AiOutlineRise size='25px' color='#FFFFFF'/>
        </NavLink>

        <NavLink
          to='/'
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}
        >
          <TfiVideoClapper size='25px' color='#FFFFFF'/>
        </NavLink>

        <NavLink
          to='/shuffle/'
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}
        >
          <BiShuffle size='25px' color='#FFFFFF'/>
        </NavLink>
      </div>

      <div className='sidebar--options'>
        <BsFillInfoCircleFill size='25px' color='#FFFFFF'/>
      </div>
    </div>
  )
}

export default Sidebar