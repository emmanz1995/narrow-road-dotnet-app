import React from 'react';
import './layout.scss';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <aside className="layout__aside">
                <div>
                    <h2>NarrowRoad</h2>
                    <ul className="list">
                        <li><a href="">Profile</a></li>
                        <li><a href="">Add New Prayer</a></li>
                        <li><a href="">Answered Prayers</a></li>
                        <li><a href="">Logout</a></li>
                    </ul>
                </div>
            </aside>
            <div className="layout__body">
                {children}
            </div>
        </div>
    );
}

export default Layout;