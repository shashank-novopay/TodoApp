import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo'; //for binding
import {addTodoMutation} from '../queries/queries';
import {getTodosQuery} from '../queries/queries';



class AddTodo extends Component{
  constructor(props){
    super(props);
    this.state={
      name:''
    };
  }
  submitForm(e){
    e.preventDefault();
    this.props.addTodoMutation({
      variables: {
        name: this.state.name
      },
        refetchQueries: [{query: getTodosQuery}]
     });
  }
  render(){
    return(
      <form id="add-todo" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label> Todo Name</label>
          <input type="text" required="required" onChange={(e)=>this.setState({name:e.target.value})}/>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(addTodoMutation, {name:"addTodoMutation"})
)(AddTodo);
