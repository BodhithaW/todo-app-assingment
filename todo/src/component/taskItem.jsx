// import React from 'react';
// import { Button } from '@mui/material';
// import NotificationsIcon from '@mui/icons-material/Notifications';
//
// const TaskItem = ({ task }) => {
//     const getPriorityColor = (priority) => {
//         switch (priority) {
//             case 'HIGH':
//                 return 'red';
//             case 'MEDIUM':
//                 return 'yellow';
//             case 'LOW':
//                 return 'blue';
//             default:
//                 return 'grey';
//         }
//     };
//
//     if (!task) {
//         return null; // Guard against undefined task
//     }
//
//     return (
//         <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
//             <h3>{task.name}</h3>
//             <p>{task.todo}</p>
//             <NotificationsIcon style={{ color: getPriorityColor(task.priority) }} />
//             {!task.completed && <Button variant="contained" color="primary">Mark as done</Button>}
//         </div>
//     );
// };
//
// export default TaskItem;
