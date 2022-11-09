import React from 'react'
import './sidenav.scss'
import switchOrganization from '../../assets/sidebarIcons/switchOrganization.svg'
import dashboard from '../../assets/sidebarIcons/dashboard.svg'
import dropIcon from '../../assets/sidebarIcons/drop.svg'
import Customers from './sidebarLinks/customers'
import Businesses from './sidebarLinks/businesses'
import Settings from './sidebarLinks/settings'

const SideNav = () => {
  return (
    <div className='sidenav'>
        <section className='switch-container'>
            <div className='switch-organization'>
                <img alt='briefcase' src={switchOrganization} />
                <h4>Switch Organization</h4>
                <img alt='drop down' src={dropIcon} />
            </div>
            <div className='dashboard'>
                <img alt='home' src={dashboard} />
                <h5>Dashboard</h5>
            </div>
        </section>
        <Customers />
        <Businesses />
        <Settings />
    </div>
  )
}

export default SideNav