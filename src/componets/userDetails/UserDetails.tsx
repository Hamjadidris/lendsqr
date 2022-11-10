import './userdetails.scss'
import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import PersonalInfo from './detailCcomponents/PersonalInfo'
import Education from './detailCcomponents/Education'
import Socials from './detailCcomponents/Socials'
import Guarantor from './detailCcomponents/Guarantor'


export const userContext = createContext<any>([])

const UserDetails = () => {

    const [currentUser, setCurrentUser] = useState<any[]>([]);
    // useEffect(() => {
    //     const getUsers = async () => {
    //       const res = await axios.get(
    //         "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    //       );
    //       const fetchedUser = res.data;
    //       setCurrentUser(fetchedUser.slice(0,1));
    //     };
    //     getUsers();
    //   }, []);

    useEffect(() => {
      axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users").then((res) => {
          setCurrentUser(res.data.slice(0, 1));
      })
  },[]);
      console.log(currentUser[0])
  return (
    <div className='userdetails'>
      <userContext.Provider value={currentUser}>
             <PersonalInfo  />
            <Education   />
            <Socials   />
            <Guarantor   />
      </userContext.Provider>     
    </div>
  )
}

export default UserDetails