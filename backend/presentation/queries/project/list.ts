import { getProjectsUseCase } from '../../../domain';
import { GraphQLList } from 'graphql';
import { ProjectType } from '../../types';

export const projectsQuery = {
  type: new GraphQLList(ProjectType),
  description: 'List of all Projects',
  resolve() {
    return getProjectsUseCase();
  },
};
