import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const TaskType = new GraphQLObjectType({
  name: 'Type',
  description: 'This represent a task',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export * from './create';
