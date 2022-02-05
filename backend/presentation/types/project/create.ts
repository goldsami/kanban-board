import { GraphQLInputObjectType, GraphQLString } from 'graphql';

export const CreateProjectType = new GraphQLInputObjectType({
  name: 'CreateProjectType',
  fields: {
    name: { type: GraphQLString },
  },
});
