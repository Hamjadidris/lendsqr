import "./userComponent.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import editbtn from "../../assets/editbtn.svg";
import pending from "../../assets/pending pill.svg";
import UserInterface from "./userInterface";
import Pagination from "./Pagination";

const UserComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [userObject, setUserObject] = useState<any[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      const fetchedUsers = res.data;
      setUserObject(fetchedUsers);
    };
    getUsers();
  }, []);

  const lastPostIndex = currentPage * usersPerPage;
  const firstPostIndex = lastPostIndex - usersPerPage;
  const currentUsers = userObject.slice(firstPostIndex, lastPostIndex);

  function dateString (date:any):any{
    return date.slice(0,10)
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
        />
      ))}
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
