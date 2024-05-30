// import React, { useState, useEffect } from 'react';
// import { getTasks } from '../api';
// import ReactPaginate from 'react-paginate';
// import '../../src/App.css';
//
// const TaskList = () => {
//     const [tasks, setTasks] = useState([]);
//     const [currentPage, setCurrentPage] = useState(0);
//
//     useEffect(() => {
//         const fetchTasks = async () => {
//             const tasks = await getTasks();
//             setTasks(tasks);
//         };
//
//         fetchTasks();
//     }, []);
//
//     const handlePageClick = (data) => {
//         setCurrentPage(data.selected);
//     };
//
//     const tasksPerPage = 8;
//     const offset = currentPage * tasksPerPage;
//     const currentTasks = tasks.slice(offset, offset + tasksPerPage);
//     const pageCount = Math.ceil(tasks.length / tasksPerPage);
//
//     const getPriorityColor = (priority) => {
//         switch (priority) {
//             case 'HIGH':
//                 return 'red';
//             case 'MEDIUM':
//                 return 'yellow';
//             case 'LOW':
//                 return 'blue';
//             default:
//                 return 'gray';
//         }
//     };
//
//     return (
//         <div className="tasks card">
//             <h3>Tasks</h3>
//             <ul>
//                 {currentTasks.map(task => (
//                     <li key={task.id} className="task-item">
//                         <span style={{ color: getPriorityColor(task.priority) }}>{task.priority}</span>
//                         <span>{task.todo}</span>
//                         {task.completed ? (
//                             <span> Done </span>
//                         ) : (
//                             <button>Mark as done</button>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//             <ReactPaginate
//                 previousLabel={'previous'}
//                 nextLabel={'next'}
//                 breakLabel={'...'}
//                 breakClassName={'break-me'}
//                 pageCount={pageCount}
//                 marginPagesDisplayed={2}
//                 pageRangeDisplayed={5}
//                 onPageChange={handlePageClick}
//                 containerClassName={'pagination'}
//                 subContainerClassName={'pages pagination'}
//                 activeClassName={'active'}
//             />
//         </div>
//     );
// };
//
// export default TaskList;


import React, { useState, useEffect } from 'react';
import { getTasks } from '../api';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchTasks = async () => {
            const tasks = await getTasks();
            setTasks(tasks);
        };

        fetchTasks();
    }, []);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const tasksPerPage = 8;
    const offset = currentPage * tasksPerPage;
    const currentTasks = tasks.slice(offset, offset + tasksPerPage);
    const pageCount = Math.ceil(tasks.length / tasksPerPage);

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'HIGH':
                return 'red';
            case 'MEDIUM':
                return 'yellow';
            case 'LOW':
                return 'blue';
            default:
                return 'gray';
        }
    };

    return (
        <div className="tasks card">
            <h3>Tasks</h3>
            <ul>
                {currentTasks.map(task => (
                    <li key={task.id} className="task-item">
                        <FontAwesomeIcon icon={faBell} style={{ color: getPriorityColor(task.priority) }} />
                        <span>{task.todo}</span>
                        {task.completed ? (
                            <span className="status done">Done</span>
                        ) : (
                            <span className="status inprogress">In-Progress</span>
                        )}
                        {!task.completed && (
                            <button>Mark as done</button>
                        )}
                    </li>
                ))}
            </ul>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    );
};

export default TaskList;

