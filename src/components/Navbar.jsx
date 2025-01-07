import React from 'react'
import { Link, NavLink } from 'react-router'
import { useAuth } from './auth'

export const Navbar = () => {

    const auth = useAuth()

    return (
        <nav className='primary-nav'>
            {/* compared to Link, NavLink creates and active class that makes styling easier, see index.css */}
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/products'}>Products</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
            {
                !auth.user && (<NavLink to={'/login'}>Login</NavLink>)
            }
        </nav>
    )
}
