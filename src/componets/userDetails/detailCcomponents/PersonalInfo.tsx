import { useState, useContext } from "react";
import { userContext } from "../UserDetails";

const PersonalInfo = () => {
  const user = useContext(userContext);
  console.log(user[0])

  return (
    <section className="main-section personal-info">
      <h1>Personal Information</h1>
       <section className="info-section">
        <div>
          <label>full Name</label>
          <h2>{user[0]?.profile.firstName} {user[0]?.profile.lastName}</h2>
        </div>
        <div>
          <label>Phone Number</label>
          <h2>{user[0]?.profile.phoneNumber}</h2>
        </div>
        <div>
          <label>Email Address</label>
          <h2>{user[0]?.email}</h2>
        </div>
        <div>
          <label>Bvn</label>
          <h2>{user[0]?.profile.bvn}</h2>
        </div>
        <div>
          <label>Gender</label>
          <h2>{user[0]?.profile.gender}</h2>
        </div>
        <div>
          <label>Marital status</label>
          <h2>single</h2>
        </div>
        <div>
          <label>Children</label>
          <h2>none</h2>
        </div>
        <div>
          <label>Type of residence</label>
          <h2>Parent's Apartment</h2>
        </div>
      </section> 
    </section>
  );
};

export default PersonalInfo;
