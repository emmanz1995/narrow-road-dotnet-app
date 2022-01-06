import React from 'react';
import './styles.scss';

const Navbar = () => {
    const navItems = [
        {
            name: 'Add Prayer',
            link: '/create-prayer'
        },
        {
            name: 'Testimonies',
            link: '/testimonies'
        },
        {
            name: 'About',
            link: '/about'
        }
    ]
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo-container">
                    <h1><i>NarrowRoad.NET</i></h1>
                </div>
                <ul className="list">
                    {navItems?.map((items) => (
                        <li key={items?.name}><a className="btn-link" href={items?.link}>{items?.name}</a></li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
