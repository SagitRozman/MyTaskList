import React, { Component } from 'react';
import TaskDetails from './TaskDetails';
import moment from 'moment';

class AddTaskSection extends Component {

  constructor(props) {
    super(props);

    this.emptyTask = {description: '', assignee: '', dueDate: moment(), completed: false};

    // Set the initial state
    this.state = {adding: false};
  }

  toggleAdding() {
    this.setState({adding: !this.state.adding});
  }

  render() {
    return (<div className="add-task-section row">
              {(() => {
                return (this.state.adding ?
                  <TaskDetails title="Add a task:" activeTask={this.emptyTask} onClick={this.props.taskAdd} onSave={this.toggleAdding.bind(this)}></TaskDetails>
                  : <button type="button" className="add-btn btn btn-default pull-right" onClick={this.toggleAdding.bind(this)}>Add Task</button>
                )
              })()}
            </div>);
  }
}

AddTaskSection.propTypes = {
  taskAdd: React.PropTypes.func.isRequired
};

export default AddTaskSection;
