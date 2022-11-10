import './user.scss'
import { useState } from 'react'
import Navbar from '../componets/navbar/Navbar'
import SideNav from '../componets/sideNav/SideNav'
import UserPage1 from './userPages/userpage1/userPage1'
import UserPage2 from './userPages/userPage2/userpage2'

const User = () => {
  const [userPage, setUserPage] = useState({
    Page1:true,
    page2:false
})
    const handlePage1 = () =>{
      setUserPage({Page1:true, page2:false})
    }
   const handlePage2 = () =>{
      setUserPage({Page1:false, page2:true})
    }
  return (
    <div className='user'>
      <Navbar />
      <SideNav />
      {
        (userPage.Page1)?(<UserPage1 handlePage2 ={handlePage2}/>)
        :<UserPage2 handlePage1 ={handlePage1} />
      }
    </div>
  ) 
}

export default User