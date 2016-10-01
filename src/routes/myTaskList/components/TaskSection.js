import React from 'react';
import TaskList from './TaskList';
import AddTaskSection from './AddTaskSection';
import EditTaskSection from './EditTaskSection';

export const TaskSection = (props) => (
  <div className="task-section container">
      <AddTaskSection taskAdd={props.taskAdd}></AddTaskSection>
      <TaskList className="todo-tasks row top-buffer" tasks={props.tasks} title="TODO Tasks" toShowCompleted={false} taskToggle={props.taskToggle} setActiveTask={props.setActiveTask}></TaskList>
      <TaskList className="completed-tasks row" tasks={props.tasks} title="Completed Tasks" toShowCompleted={true} taskToggle={props.taskToggle} setActiveTask={props.setActiveTask}></TaskList>
      <EditTaskSection activeTask={props.activeTask} taskUpdate={props.taskUpdate} setActiveTask={props.setActiveTask}></EditTaskSection>
  </div>
)

TaskSection.propTypes = {
  tasks: React.PropTypes.array.isRequired,
  activeTask: React.PropTypes.object.isRequired,
  taskToggle: React.PropTypes.func.isRequired,
  taskAdd: React.PropTypes.func.isRequired,
  taskUpdate: React.PropTypes.func.isRequired,
  setActiveTask: React.PropTypes.func.isRequired
};

export default TaskSection;
