import React from 'react'

export const TaskItem = (props) => (
  <li className="task-item">
    <input type="checkBox" className="completed" checked={props.task.completed} onChange={() => {props.taskToggle(props.task.id)}}></input>
    <span className="description"> {props.task.description}</span>
    <span className="assignee"> {props.task.assignee}</span>
    <span className="due-date"> {props.task.dueDate.format("DD-MM-YYYY")}</span>
    <a href="#" className="edit-btn" onClick = {() => { props.setActiveTask(props.task)}}>Edit</a>
  </li>
)

TaskItem.propTypes = {
  task     : React.PropTypes.object.isRequired,
  taskToggle : React.PropTypes.func.isRequired,
  setActiveTask: React.PropTypes.func.isRequired
};

export default TaskItem;
