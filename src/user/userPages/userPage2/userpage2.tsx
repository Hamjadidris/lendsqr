import './userpage2.scss'
import arrow from '../../../assets/arrow.svg'
import blacklist from '../../../assets/blacklist.svg'
import activate from '../../../assets/activate.svg'
import DetailsDashboard from '../../../componets/detailsDashboard/DetailsDashboard'
import UserDetails from '../../../componets/userDetails/UserDetails'

const userpage2 = ( { handlePage1 }:any ) => {
  return (
    <div className='userpage2'>
        <div onClick={handlePage1} className='back-btn'>
            <img alt='arrow' src={arrow}/>
            <h5>Back to Users</h5>
        </div>
        <div className='header-details'>
            <section>
                <h3>User Details</h3>
            </section>
            <section className='act-black-btn'>
                <img alt='blacklist' src={blacklist}/>
                <img alt='activate' src={activate}/>
            </section>
        </div>
        <DetailsDashboard />
        <UserDetails/>
    </div>
  )
}

export default userpage2