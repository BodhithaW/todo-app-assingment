import React from 'react';
import TaskList from './component/taskList';
import ActivityFeed from './component/activityFeed';
import TasksByPriorityChart from './component/tasksByPriorityChart';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <h1>Acmey Solutions</h1>
                <a href="#">Dashboard</a>
            </div>
            <div className="dashboard">
                <div className="header card">
                    <h1>Welcome back, John Doe</h1>
                    <p>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmey.</p>
                </div>
                <div className="main-content">
                    <TaskList />
                    <div>
                        <ActivityFeed />
                        <TasksByPriorityChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
