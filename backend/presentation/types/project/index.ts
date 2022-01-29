import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const ProjectType = new GraphQLObjectType({
  name: 'Type',
  description: 'This represent a project',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export * from './create';
