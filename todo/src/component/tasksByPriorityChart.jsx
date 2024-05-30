import React, { useEffect, useState } from 'react';
import { getTasks } from '../api';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../../src/App.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const TasksByPriorityChart = () => {
    const [data, setData] = useState({
        labels: ['High', 'Medium', 'Low'],
        datasets: [
            {
                data: [0, 0, 0],
                backgroundColor: ['red', 'yellow', 'blue']
            }
        ]
    });

    useEffect(() => {
        const fetchTasks = async () => {
            const tasks = await getTasks();
            const high = tasks.filter(task => task.priority === 'HIGH').length;
            const medium = tasks.filter(task => task.priority === 'MEDIUM').length;
            const low = tasks.filter(task => task.priority === 'LOW').length;

            setData({
                labels: ['High', 'Medium', 'Low'],
                datasets: [
                    {
                        data: [high, medium, low],
                        backgroundColor: ['red', 'yellow', 'blue']
                    }
                ]
            });
        };

        fetchTasks();
    }, []);

    return (
        <div className="tasks-priorities card">
            <h3>Tasks by Priority</h3>
            <Doughnut data={data} />
        </div>
    );
};

export default TasksByPriorityChart;
