import { useState, useContext } from "react";
import { userContext } from "../UserDetails";

const Guarantor = () => {
  const user = useContext(userContext);

  return (
    <section className='main-section guarantor'>
    <h1>Guarantor</h1>
    <section className="info-section">
        <div>
          <label>full Name</label>
          <h2>{user[0].guarantor.firstName}</h2>
        </div>
        <div>
          <label>Phone Number</label>
          <h2>{user[0].guarantor.phoneNumber.slice(0,14)}</h2>
        </div>
        <div>
          <label>Email Address</label>
          <h2>{user[0].education.officeEmail}</h2>
        </div>
        <div>
          <label>Relationship</label>
          <h2>Sister</h2>
        </div>
      </section>
</section>
  )
}

export default Guarantor