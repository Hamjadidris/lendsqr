import './userPage1.scss'
import Card from '../../../componets/card/card'
import filter from '../../../assets/filter-results-button.svg'
import UserComponent from '../../../componets/userComponent/userComponent'

const UserPage1 = ( { handlePage2 }:any ) => {
  return (
    <div className='userpage1'>
      <h2>Users</h2>
      <Card/>
      <div className='table'>
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
                    <UserComponent handlePage2 ={handlePage2} />
                </tbody>
            </table>
      </div>
      {/* <button onClick={handlePage2}>vv</button> */}
    </div>
  )
}

export default UserPage1