import "./userComponent.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import editbtn from "../../assets/editbtn.svg";
import pending from "../../assets/pending pill.svg";
import UserInterface from "./userInterface";
import Pagination from "./Pagination";
import activateIcon from '../../assets/activateIcon.svg'
import viewIcon from '../../assets/viewIcon.svg'
import blacklistIcon from '../../assets/blacklistIcon.svg'


const UserComponent = ({ handlePage2 }:any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [option, showOption] = useState(false);
  const [userObject, setUserObject] = useState<any[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true)
      const res = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      const fetchedUsers = res.data;
      setUserObject(fetchedUsers);
      setLoading(false)
    };
    getUsers();
  }, []);

  const lastPostIndex = currentPage * usersPerPage;
  const firstPostIndex = lastPostIndex - usersPerPage;
  const currentUsers = userObject.slice(firstPostIndex, lastPostIndex);

  function dateString (date:any):any{
    return date.slice(0,10)
  }

  function handleOption (){
    if(option){
      return showOption(false)
    }
    showOption(true)
  }
  if(loading){
   return <h1>loading users...</h1>
  }
  return (
    <>
      {currentUsers.map((user) => (
        <UserInterface
          id={user.id}
          key={user.id}
          organization={user.orgName}
          username={user.userName}
          email={user.email}
          phoneNumber={user.phoneNumber}
          dateJoined={dateString(user.createdAt)}
          status={pending}
          icon={editbtn}
          click={handleOption}
        />
      ))}
      <div className={(option)?('show'):('hide')}>
              <button onClick={ handlePage2 }> <img alt="view" src={viewIcon}/> View Details</button>
              <button> <img alt="blacklist" src={blacklistIcon}/>Blacklist User</button>
              <button> <img alt="activate" src={activateIcon}/>Activate User</button>
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        usersPerPage={usersPerPage}
        setUsersPerPage={setUsersPerPage}
      />
    </>
  );
};

export default UserComponent;
