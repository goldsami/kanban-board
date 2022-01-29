import { getProjectsUseCase } from '../../../domain';
import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { ProjectType } from '../../types';

export const projectsQuery = {
  type: new GraphQLList(ProjectType),
  args: {
    userId: { type: new GraphQLNonNull(GraphQLString) }
  },
  description: 'List of all Projects',
  resolve(_, { userId }) {
    return getProjectsUseCase(userId);
  },
};
