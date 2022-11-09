import './user.scss'
import Navbar from '../componets/navbar/Navbar'
import SideNav from '../componets/sideNav/SideNav'
import UserPage1 from './userPages/userpage1/userPage1'

const User = () => {
  return (
    <div className='user'>
      <Navbar />
      <SideNav />
      <UserPage1 />
    </div>
  )
}

export default User