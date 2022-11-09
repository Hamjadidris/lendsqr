import Link from '../link'
import organization from '../../../assets/sidebarIcons/businessesIcon/switchOrganization.svg'
import loanproduct from '../../../assets/sidebarIcons/businessesIcon/loanrequest.svg'
import savingsproduct from '../../../assets/sidebarIcons/businessesIcon/savingsproduct.svg'
import feesandcharges from '../../../assets/sidebarIcons/businessesIcon/feesandcharges.svg'
import transaction from '../../../assets/sidebarIcons/businessesIcon/transaction.svg'
import services from '../../../assets/sidebarIcons/businessesIcon/services.svg'
import serviceaccount from '../../../assets/sidebarIcons/businessesIcon/serviceaccount.svg'
import settlements from '../../../assets/sidebarIcons/businessesIcon/settlements.svg'
import reports from '../../../assets/sidebarIcons/businessesIcon/reports.svg'


const Businesses = () => {
  return (
    <div className='container businesses'>
          <h4>Businesses</h4>
        <ul>
            <Link title='Organization' icon={organization}/>
            <Link title='Loan Products' icon={loanproduct} />
            <Link title='Savings Products' icon={savingsproduct} />
            <Link title='Fees and Charges' icon={feesandcharges} />
            <Link title='Transactions' icon={transaction} />
            <Link title='Services' icon={services} />
            <Link title='Service Account' icon={serviceaccount} />
            <Link title='Settlements' icon={settlements} />
            <Link title='Reports' icon={reports} />
        </ul>
    </div>
  )
}

export default Businesses