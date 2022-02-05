import { getProjectsUseCase } from '../../../domain';
import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { ProjectType } from '../../types';

export const projectsQuery = {
  type: new GraphQLList(ProjectType),
  description: 'List of all Projects',
  resolve(_, args, context) {
    return getProjectsUseCase(context.userId);
  },
};
