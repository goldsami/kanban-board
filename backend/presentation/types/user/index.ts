import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'This represent a user',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export * from './create';
