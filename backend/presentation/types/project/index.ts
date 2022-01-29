import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const ProjectType = new GraphQLObjectType({
  name: 'ProjectType',
  description: 'This represent a project',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export * from './create';
