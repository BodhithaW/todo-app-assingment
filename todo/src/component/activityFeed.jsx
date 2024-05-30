import React from 'react';
import '../../src/App.css';

const ActivityFeed = () => {
    const activities = [
        {
            id: 1,
            description: 'Kushantha Charuka created Contract #00124 need John Beige’s signature',
            timestamp: 'Sep 16, 2022 11:30 AM'
        },
        {
            id: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque',
            timestamp: 'Sep 16, 2022 11:45 AM'
        },
        {
            id: 3,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque',
            timestamp: 'Sep 16, 2022 11:45 AM'
        }
    ];

    return (
        <div className="activity-feed card">
            <h3>Activity Feed</h3>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>
                        <p>{activity.description}</p>
                        <span>{activity.timestamp}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityFeed;
