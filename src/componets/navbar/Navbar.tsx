import React from 'react'
import './navbar.scss'
import union from '../../assets/loginPictures/Union.svg'
import lendsqr from '../../assets/loginPictures/lendsqr.svg'
import searchIcon from '../../assets/searchIcon.svg'
import notif from '../../assets/notif.svg'
import userImg from '../../assets/userImg.svg'
import dropdown from '../../assets/dropdown.png'


const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo'>
            <img alt='logo' src={union} className='union'/>
            <img alt='lendsqr' src={lendsqr}/> 
        </div>
        <section className='nav-section'>
            <div className='search'>
                <input type="text" placeholder='Search for anything'/>
                <span className="search-icon"> <img alt='search' src={searchIcon}/></span>
            </div>
            <div className='profile'>
                <a href='#'> Docs </a>
                <img alt='notification' src={notif}/>
                <img alt='user' src={userImg}/>
                <div className='name'>
                    <p>Hamjad</p>
                    <img alt='dropdown' src={dropdown}/>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Navbar