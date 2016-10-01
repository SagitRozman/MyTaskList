import React, { Component } from 'react';
import TaskDetails from './TaskDetails';

class EditTaskSection extends Component {

  constructor(props) {
    super(props);
  }

  resetActiveTask() {
    this.props.setActiveTask({});
  }

  render() {
    return (() => {
      return (this.props.activeTask.id ?
        <div className="edit-task-section row">
          <TaskDetails title="Edit" activeTask={this.props.activeTask} onClick={this.props.taskUpdate} onSave={this.resetActiveTask.bind(this)}></TaskDetails>
        </div>
        : null )
    })();
  }


}

EditTaskSection.propTypes = {
  taskUpdate: React.PropTypes.func.isRequired,
  activeTask: React.PropTypes.object.isRequired,
  setActiveTask: React.PropTypes.func.isRequired
};

export default EditTaskSection;
