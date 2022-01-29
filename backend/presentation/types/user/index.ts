import { getProjectsUseCase } from '../../../domain';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { ProjectType } from '..';

export const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'This represent a user',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    projects: {
      type: new GraphQLList(ProjectType), resolve: ({ id }) => {
        return getProjectsUseCase(id);
      }
    },
  }),
});

export * from './create';
