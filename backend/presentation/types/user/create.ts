import { GraphQLInputObjectType, GraphQLString } from "graphql";

export const CreateUserType = new GraphQLInputObjectType({
  name: 'CreateUserType',
  fields: {
    name: { type: GraphQLString },
  },
});