import {gql} from 'apollo-boost';

const getTodosQuery = gql`
{
  todos{
    name
    id
  }
}
`

const addTodoMutation =  gql`
mutation($name: String!){
  addTodo(name: $name){
    name
    id
  }
}
`

export {getTodosQuery,addTodoMutation};
