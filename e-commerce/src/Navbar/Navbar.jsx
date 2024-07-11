import React from 'react'
import './NavBar.css'
import CartWidget from '../componentes/CartWidget/CartWidget'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h2>CNDSWT</h2>
            <CartWidget />
        </div>
    )
}

export default Navbar