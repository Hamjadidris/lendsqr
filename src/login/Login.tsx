import React from 'react'
import union from '../assets/loginPictures/Union.svg'
import pablo from '../assets/loginPictures/pablo.svg'
import lendsqr from '../assets/loginPictures/lendsqr.svg'
import "./login.scss"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
        <section className='pablo'>
            <div className='logo'>
                <img alt='logo' src={union} className='union'/>
                <img alt='lendsqr' src={lendsqr}/>
            </div>
            <img alt='pablo' src={pablo} className="pabloImg"/>
        </section>
        <section className='form'>
            <div className='welcome'>
                <h2>Welcome!</h2>
                <h5>Enter details to login.</h5>
            </div>
            <form>
                <input type={"email"} placeholder="Email"/>
                <input type={"password"} placeholder="Password"/>
                <a href='#'>FORGOT PASSWORD?</a>
                <Link to="/users">
                    <button className='log-in-btn'>LOG IN</button>
                </Link>
            </form>
        </section>
    </div>
  )
}

export default Login