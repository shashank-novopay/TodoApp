import React, {Component} from 'react';
import {graphql} from 'react-apollo'; //for binding
import {getTodosQuery} from '../queries/queries';

class TodoList extends Component{
  displayTodos(){
    var data = this.props.data;
    if (data.loading) {
      return(<div id="loading">Loading todos...</div>);
    } else {
      return data.todos.map(todo => {
        return(
          <li key={todo.id}>{todo.name}</li>
        );
      })
    }
  }
render(){
  console.log(this.props.data);

  return (
    <div id="todos">
      <ul id="todo-list">
        {this.displayTodos()}
      </ul>
    </div>
  );
}
}

export default graphql(getTodosQuery)(TodoList);
