import React from 'react'
import Header from '../Components/Header/Header'
import NavDestination from '../Components/Header/NavDestination'

const Destination = () => {
  return (
    <div>
        <Header />
        <p className='page-actual'>
            <span className='num'>01</span>
            PICK YOUR DESTINATION
        </p>
        <NavDestination />
    </div>
  )
}

export default Destination