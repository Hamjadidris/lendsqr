import { useState, useContext } from "react";
import { userContext } from "../UserDetails";

const Education = () => {
  const user = useContext(userContext);

  return (
    <section className='main-section education'>
            <h1>Education and Employment</h1>
            <section className="info-section">
        <div>
          <label>level of education</label>
          <h2>{user[0].education.level}</h2>
        </div>
        <div>
          <label>employment status</label>
          <h2>{user[0].education.employmentStatus}</h2>
        </div>
        <div>
          <label>sector of employment</label>
          <h2>{user[0].education.sector}</h2>
        </div>
        <div>
          <label>Duration of employment</label>
          <h2>{user[0].education.duration}</h2>
        </div>
        <div>
          <label>office email</label>
          <h2>{user[0].education.officeEmail}</h2>
        </div>
        <div>
          <label>Monthly income</label>
          <h2>N{user[0].education.monthlyIncome[0]}-N{user[0].education.monthlyIncome[1]}</h2>
        </div>
        <div>
          <label>loan repayment</label>
          <h2>{user[0].education.loanRepayment}</h2>
        </div>
      </section>
        </section>
  )
}

export default Education