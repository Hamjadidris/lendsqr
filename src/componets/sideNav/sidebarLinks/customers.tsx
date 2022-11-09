import './linkStyle.scss'
import Link from '../link'
import users from '../../../assets/sidebarIcons/customerIcon/users.svg'
import guarantor from '../../../assets/sidebarIcons/customerIcon/guarantor.png'
import loan from '../../../assets/sidebarIcons/customerIcon/loan.svg'
import decisionmodel from '../../../assets/sidebarIcons/customerIcon/decisionmodel.svg'
import savings from '../../../assets/sidebarIcons/customerIcon/savings.svg'
import loanrequest from '../../../assets/sidebarIcons/customerIcon/loanrequest.svg'
import whitelist from '../../../assets/sidebarIcons/customerIcon/whitelist.svg'
import karma from '../../../assets/sidebarIcons/customerIcon/karma.svg'

const Customers = () => {
  return (
    <div className='container customers'>
        <h4>Customers</h4>
        <ul>
            <Link title='Users' icon={users} className='usersLinks'/>
            <Link title='Guarantors' icon={guarantor} />
            <Link title='Loans' icon={loan} />
            <Link title='Decision Models' icon={decisionmodel} />
            <Link title='Savings' icon={savings} />
            <Link title='Loan Requests' icon={loanrequest} />
            <Link title='Whilelist' icon={whitelist} />
            <Link title='karma' icon={karma} />
        </ul>
    </div>
  )
}

export default Customers