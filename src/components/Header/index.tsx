import { useState } from 'react'
import './header.scss'

const Header = () => {
  const [ current, setCurrent ] = useState('')
  console.log(current)

  return(
    <div className="header--container">
      <div className="logo-container">
        <img src="https://res.cloudinary.com/dzifwhokp/image/upload/v1639797217/imperial_cdov4u.png" alt="logo_image.png" />
        <div className='name'>
          <h5>
            Atera
          </h5>
          <p>
            Anime App
          </p>
        </div>
      </div>
      <div className="menu--container">
        <div className='menu'>
          <ul>
            <li>
              <a href='#'>Inicio</a>
            </li>
            <li>
              <a href='#'>Directorio</a>
            </li>
          </ul>
          <input
            id='search-input'
            placeholder='Buscar...'
            onChange={(e) => setCurrent(e.currentTarget.value)}
          />
        </div>
        <div className='user-info'>
          <img
            src='https://res.cloudinary.com/dzifwhokp/image/upload/v1638636843/TEH2PTB37-U01CQKT45B6-d6b2f49fc0c4-512_ovbydl.jpg'
            alt='avatar.png'
          />
        </div>
      </div>
    </div>
  )
}

export default Header