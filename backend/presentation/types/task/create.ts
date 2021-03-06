import {GraphQLInputObjectType, GraphQLInt, GraphQLString} from 'graphql';

export const CreateTaskType = new GraphQLInputObjectType({
  name: 'CreateTaskType',
  fields: {
    name: { type: GraphQLString },
    listId: { type: GraphQLString },
    order: {type: GraphQLInt },
  },
});
