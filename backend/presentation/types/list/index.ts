import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const ListType = new GraphQLObjectType({
  name: 'ListType',
  description: 'This represent a list',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export * from './create';
