import React from 'react';
import TaskItem from './TaskItem';

export const TaskList = (props) => {
  const toShowCompleted = props.toShowCompleted;

  // Get an array of TaskItems sorted by their due-dates
  const tasks = props.tasks.sort((a, b) => {
    // Sort the tasks by due date
    if(a.dueDate > b.dueDate) {
      return -1;
    }
    if (b.dueDate > a.dueDate) {
      return 1;
    }
    return 0;
  }).map((task) => {
    // Convert each task into a TaskItem
    return (task.completed == toShowCompleted) ?
      <TaskItem task={task} taskToggle={props.taskToggle} key={task.id} setActiveTask={props.setActiveTask}></TaskItem>
      : '';
  });

  return (<div className={props.className}>
    <h3>{props.title}</h3>
    <ul className="task-list" >
      {tasks}
    </ul>
  </div>);
};

TaskList.propTypes = {
  tasks : React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
  toShowCompleted: React.PropTypes.bool.isRequired,
  taskToggle : React.PropTypes.func.isRequired,
  setActiveTask: React.PropTypes.func.isRequired
};

export default TaskList;
