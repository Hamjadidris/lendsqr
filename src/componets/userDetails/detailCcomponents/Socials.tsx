import { useState, useContext } from "react";
import { userContext } from "../UserDetails";

const Socials = () => {
  const user = useContext(userContext);

  return (
    <section className="main-section socials">
      <h1>Socials</h1>
      <section className="info-section">
        <div>
          <label>Twitter</label>
          <h2>{user[0].socials.twitter}</h2>
        </div>
        <div>
          <label>Facebook</label>
          <h2>{user[0].socials.facebook}</h2>
        </div>
        <div>
          <label>Instagram</label>
          <h2>{user[0].socials.instagram}</h2>
        </div>
      </section>
    </section>
  );
};

export default Socials;
