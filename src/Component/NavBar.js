import React from 'react'
import './navBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NavBar() {
  return (
    <div className='navbar'>
      <div className='nav-menu'>
        <div className='logo-profile'>
            <AccountCircleIcon/>
        </div>
        <div>
          <p>User Name</p>
        </div>
        </div>
    </div>
  )
}

export default NavBar