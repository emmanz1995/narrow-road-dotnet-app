import React from 'react';
import './dashboardButton.scss';

const DashboardButton = ({ text }) => {
    return (
        <div className="dashboard-button">
            <b>{text}</b>
        </div>
    );
}

export default DashboardButton;