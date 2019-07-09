import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//components
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

//apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
      <h1> Todo Application</h1>
      <TodoList/>
      <AddTodo/>
      </div>
    </ApolloProvider>
  );
}

export default App;
