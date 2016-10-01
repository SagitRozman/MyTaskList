import React, { Component } from 'react';
import assignees from "./../storage/assignees";
import DatePicker from 'react-datepicker';

require('react-datepicker/dist/react-datepicker.css');

class TaskDetails extends Component {

  constructor(props) {
    super(props);

    this.assigneesOptions  = assignees.map((assignee) => (
      < option value = {assignee.name} key= {assignee.id}> {assignee.name} </option >
    ));
    this.assigneesOptions.unshift(<option></option>)

    // Set the initial state
    this.state = this.getDirtyStateObj(this.props);
  }

  getDirtyStateObj(props) {
    return {dirtyDescription: props.activeTask.description,
      dirtyAssignee: props.activeTask.assignee,
      dirtyDueDate: props.activeTask.dueDate};
  }

  onDescriptionChange(event) {
    this.setState({dirtyDescription: event.target.value});
  }

  onAssigneeChange(event) {
    this.setState({dirtyAssignee: event.target.value});
  }

  onDueDateChange(date) {
    this.setState({dirtyDueDate: date});
  }

  save() {
    const activeTask = this.props.activeTask;
    activeTask.description = this.state.dirtyDescription;
    activeTask.assignee = this.state.dirtyAssignee;
    activeTask.dueDate = this.state.dirtyDueDate;
    this.props.onClick(activeTask);
    this.props.onSave();
  }

  componentWillReceiveProps (nextProps) {
  this.setState(this.getDirtyStateObj(nextProps));
}

  render() {
    return (
      <div className="container lg-top-buffer">
        <h3 className="task-detail-title row">{this.props.title}</h3>
        <form className="form-horizontal task-details row">
          <div className="form-group">
            <label className="control-label col-sm-1" htmlFor="description">Description:</label>
            <div className="col-sm-11"><input type="text" id="description" className="description form-control col-xs-2" placeholder="Describe your task" value={this.state.dirtyDescription} onChange={this.onDescriptionChange.bind(this)}></input></div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-1" htmlFor="assignee">Assignee:</label>
            <div className="col-sm-11"><select className="form-control col-sm-10" id="assignee" value={this.state.dirtyAssignee} onChange={this.onAssigneeChange.bind(this)} >
              { this.assigneesOptions }
            </select></div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-1" htmlFor="dueDate">Due Date:</label>
            <div className="col-sm-11"><DatePicker className="form-control pull-left" id="dueDate"
                                                   selected={this.state.dirtyDueDate}
                                                   onChange={this.onDueDateChange.bind(this)} /></div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-1 col-sm-11">
              <button type="button" className="btn btn-default pull-right" onClick={this.save.bind(this)}>Save</button>
            </div></div>
        </form>
      </div>
    )
  }

}

TaskDetails.propTypes = {
  activeTask : React.PropTypes.object.isRequired,
  onClick : React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired
};

export default TaskDetails;
