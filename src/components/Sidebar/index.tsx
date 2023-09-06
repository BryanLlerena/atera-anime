import {  useNavigation } from 'react-router-dom'
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
        <a href='/search-anime-manga/'>
          <TbSearch size='25px' color='#FFFFFF'/>
        </a>
        
        <a href='/'>
          <LiaHomeSolid size='25px' color='#FFFFFF'/>
        </a>

        <a href='/top-rated/'>
          <AiOutlineRise size='25px' color='#FFFFFF'/>
        </a>

        <a href='/'>
          <TfiVideoClapper size='25px' color='#FFFFFF'/>
        </a>

        <a href='/shuffle/'>
          <BiShuffle size='25px' color='#FFFFFF'/>
        </a>
      </div>

      <div className='sidebar--options'>
        <BsFillInfoCircleFill size='25px' color='#FFFFFF'/>
      </div>
    </div>
  )
}

export default Sidebar