import React from 'react';
import './prayerWall.scss';
import Layout from '../../components/layout/Layout';
import DashboardButton from "../../components/dashboardButton/DashboardButton";

function PrayerWall() {
    return (
        <Layout>
            <nav>
                <h2>My Prayers</h2>
            </nav>
            <div className="dashboard-container">
                <DashboardButton text="4 Prayer Requests" />
                <DashboardButton text="2 Testimonies" />
            </div>
        </Layout>
    );
}

export default PrayerWall;