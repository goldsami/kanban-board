import { createProjectUseCase } from '../../../domain';
import { CreateProjectType, ProjectType } from '../../types';

export const createProjectMutation = {
  type: ProjectType,
  args: {
    data: { type: CreateProjectType },
  },
  resolve: (_, { data }, context) => {
    return createProjectUseCase({
      ...data,
      userId: context.userId,
    });
  },
};
