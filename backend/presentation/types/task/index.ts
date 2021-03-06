import {GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';

export const TaskType = new GraphQLObjectType({
  name: 'TaskType',
  description: 'This represent a task',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    order: { type: GraphQLInt },
    listId: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export * from './create';
