import { GraphQLInputObjectType, GraphQLString } from 'graphql';

export const CreateTaskType = new GraphQLInputObjectType({
  name: 'CreateTaskType',
  fields: {
    name: { type: GraphQLString },
  },
});
