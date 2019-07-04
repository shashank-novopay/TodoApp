const graphql = require('graphql');
const _= require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
  
} = graphql;

//dummy data
var todos = [
  {name: 'Task 1', createdAt: '28-10-18', updatedAt: '29-10-18',isDeleted: '1', id: '1'},
  {name: 'Task 2', createdAt: '29-10-18', updatedAt: '30-10-18', isDeleted: '0', id: '2'},
  {name: 'Task 3', createdAt: '30-10-18', updatedAt: '31-10-18', isDeleted: '1', id: '3'},
  {name: 'Task 4', createdAt: '1-10-2018', updatedAt: '2-10-2018', isDeleted: '0', id: '4'},
  {name: 'task 5', createdAt: '2-10-2018', updatedAt: '3-10-2018', isDeleted: '0', id: '5'}
];

const TodoType = new GraphQLObjectType({
  name:'Todo',
  fields:() => ({
    id: {type: GraphQLString},
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
      args: {id: {type:GraphQLString}},
      resolve(parent,args){
      return _.find(todos,{id: args.id});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})
