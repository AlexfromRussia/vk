import React from 'react';
import AddNewTask from './apptask';
import ToDoAppList from './applist';

class Todo extends React.Component {
  state = {
    tasks: []
  }

  componentWillMount() {
    this.setState({
      tasks: this.props.tasks
    });
  }

  updateList = text => {
    const updatedTasks = this.state.tasks;
    updatedTasks.unshift(text);
    this.setState({tasks: updatedTasks});
    this.updateLocalStorage(updatedTasks);
  }
  removeTask = text => {
    const updatedTasks = this.state.tasks;
    updatedTasks.splice(updatedTasks.indexOf(text), 1);
    this.setState({tasks: updatedTasks});
    this.updateLocalStorage(updatedTasks);
  }
  updateLocalStorage = updatedTasks => {
    console.log('tasks updated');
    localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
  }
  render() {
    console.log('321', this.state.tasks, this.props.tasks);
    return (
      <div>
        <h1>Todo App</h1>
        <AddNewTask updateList={this.updateList}/>
        <ToDoAppList tasks={this.state.tasks} remove={this.removeTask}/>
      </div>
    );
  }
}

Todo.propTypes = {
  tasks: React.PropTypes.array
};

export default Todo;
