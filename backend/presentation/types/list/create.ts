import {GraphQLInputObjectType, GraphQLInt, GraphQLString} from 'graphql';

export const CreateListType = new GraphQLInputObjectType({
  name: 'CreateListType',
  fields: {
    name: { type: GraphQLString },
    projectId: { type: GraphQLString },
    order: {type: GraphQLInt },
  },
});
