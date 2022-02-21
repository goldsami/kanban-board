import { useMutation, useQuery } from '@vue/apollo-composable';
import { CreateProjectMutation, DeleteProjectMutation, ProjectsQuery } from './queries/project.query';

export class ProjectService {
  static getProjects() {
    return useQuery(ProjectsQuery);
  }

  static deleteProject(variables) {
    const { mutate } = useMutation(DeleteProjectMutation, () => ({
      update: (cache, { data }) => {
        const list = cache.readQuery({ query: ProjectsQuery });
        cache.writeQuery({
          query: ProjectsQuery,
          data: {
            projects: list.projects.filter((x) => x.id !== data.deleteProject.id),
          },
        });
      },
    }));

    return mutate(variables);
  }

  static createProject(variables) {
    const { mutate } = useMutation(CreateProjectMutation, () => ({
      update: (cache, { data }) => {
        const list = cache.readQuery({ query: ProjectsQuery });
        cache.writeQuery({
          query: ProjectsQuery,
          data: {
            projects: [...list.projects, data.createProject],
          },
        });
      },
    }));

    return mutate(variables);
  }
}
