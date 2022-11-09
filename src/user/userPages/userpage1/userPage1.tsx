import './userPage1.scss'
import Card from '../../../componets/card/card'
import filter from '../../../assets/filter-results-button.svg'
import UserInterface from '../../../componets/userComponent/userInterface'


const UserPage1 = () => {
  return (
    <div className='userpage1'>
      <h2>Users</h2>
      <Card/>
      <table>
        <thead>
            <tr>
              <th> <p>ORGANIZATION</p> <img alt='filter' src={filter}/> </th>
              <th> <p>USERNAME</p> <img alt='filter' src={filter}/> </th>
              <th> <p>EMAIL</p> <img alt='filter' src={filter}/> </th>
              <th> <p>PHONE NUMBER</p> <img alt='filter' src={filter}/> </th>
              <th> <p>DATE JOINED</p> <img alt='filter' src={filter}/> </th>
              <th> <p>STATUS</p> <img alt='filter' src={filter}/> </th>
            </tr>
          </thead>
          <tbody>
                <UserInterface 
                organization='band of hawk' 
                username='guts'
                email='guts@gmail.com'
                phoneNumber='1234567'
                dateJoined='22nd/33/2022'
                status='me'
                />
                <UserInterface 
                organization='band of hawk' 
                username='guts'
                email='guts@gmail.com'
                phoneNumber='1234567'
                dateJoined='22nd/33/2022'
                status='me'
                />
                <UserInterface 
                organization='band of hawk' 
                username='guts'
                email='guts@gmail.com'
                phoneNumber='1234567'
                dateJoined='22nd/33/2022'
                status='me'
                />
                <UserInterface 
                organization='band of hawk' 
                username='guts'
                email='guts@gmail.com'
                phoneNumber='1234567'
                dateJoined='22nd/33/2022'
                status='me'
                />
                <UserInterface 
                organization='band of hawk' 
                username='guts'
                email='guts@gmail.com'
                phoneNumber='1234567'
                dateJoined='22nd/33/2022'
                status='me'
                />
                <UserInterface 
                organization='band of hawk' 
                username='guts'
                email='guts@gmail.com'
                phoneNumber='1234567'
                dateJoined='22nd/33/2022'
                status='me'
                />
                <UserInterface 
                organization='band of hawk' 
                username='guts'
                email='guts@gmail.com'
                phoneNumber='1234567'
                dateJoined='22nd/33/2022'
                status='me'
                />
                <UserInterface 
                organization='band of hawk' 
                username='guts'
                email='guts@gmail.com'
                phoneNumber='1234567'
                dateJoined='22nd/33/2022'
                status='me'
                />
          </tbody>
      </table>
    </div>
  )
}

export default UserPage1