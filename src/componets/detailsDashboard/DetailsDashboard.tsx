import './detailsdashboard.scss'
import avatar from '../../assets/avatar.svg'
import starOn from '../../assets/starOn.svg'
import starOff from '../../assets/starOff.svg'

const DetailsDashboard = () => {
  return (
    <div className='details-dashboard'>
    <div className='user-info'>
        <img alt='avatar' src={avatar}/>
        <section className='user-info-section1'>
                <h1>Grace Effiom</h1>
                <h5>LSQFf587g90</h5>
        </section>
        <section className='user-info-section2'>
            <p>User's Tier</p>
            <div className='stars'>
            <img alt='star on' src={starOn} />
            <img alt='star on' src={starOff} />
            <img alt='star on' src={starOff} />
            </div>
        </section>
        <section className='user-info-section3'>
            <h2>₦200,000.00</h2>
            <h5>9912345678/Providus Bank</h5>
        </section>
    </div>
    <div className='dashboard-links'>
        <p>General Details</p>
        <p>Documents</p>
        <p>Bank Details</p>
        <p>Loans</p>
        <p>Savings</p>
        <p>App and System</p>
    </div>
</div>
  )
}

export default DetailsDashboard