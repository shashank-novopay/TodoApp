const graphql = require('graphql');
const Todo = require('../Models/todos');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
  GraphQLList

} = graphql;

const TodoType = new GraphQLObjectType({
  name:'Todo',
  fields:() => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString},
    isDeleted: {type: GraphQLInt}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    todo: {
      type : TodoType,
      args: {id: {type:GraphQLID}},
      resolve(parent,args){
      
      }
    },
    todos: {
      type: new GraphQLList(TodoType),
      resolve(parent,args){

      }
    }
  }
});

//Adding a new todo
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo:{
      type: TodoType,
      args: {
        name: {type: GraphQLString},
        isDeleted: {type: GraphQLInt}
      },
      resolve(parent,args){
        let todo = new Todo({
          name:args.name,
          isDeleted:0
        });
        return todo.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
