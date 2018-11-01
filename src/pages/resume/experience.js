import React from "react";
import Layout from '../../components/Layout'
import TimeAgo from 'react-timeago'

const Experience = () => {
    return (
        <Layout>
            <section className="section columns">
                <div className="column">
                    <p>Test Resource Manager for NAVAIR hired <TimeAgo date="Sep 30, 2015" /></p>
                </div>
            </section>
        </Layout>
    );
};

export default Experience
