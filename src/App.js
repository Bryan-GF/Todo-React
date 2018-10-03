import React from 'react';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      todoData:
      [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      newTask: ''
    };
  };

  addTodoInput = event => {
    event.preventDefault();
    this.setState({
      todoData: [...this.state.todoData, {task: this.state.newTask,
                                          id: Date.now(),
                                          completed: false}],
     newTask: ''
    });
  };

  inputChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  completeTaskWipe = event => {
    console.log(event.target.id);
    this.setState({[event.target.id]: true});
  }

  render() {
    return (
      <div className = 'app'>
        <Todo 
        todoData={this.state.todoData} 
        newTask={this.state.newTask}
        addTodoInput={this.addTodoInput}
        inputChange={this.inputChange}
        completeTaskWipe={this.completeTaskWipe}
          />
      </div>
    );
  }
}

export default App;
