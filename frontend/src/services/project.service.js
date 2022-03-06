import { apolloClient } from '@/main';
import {
  CreateProjectMutation,
  DeleteProjectMutation,
  ProjectQuery,
  ProjectsQuery,
} from './queries/project.query';

export class ProjectService {
  static async getProjects() {
    const result = await apolloClient.query({
      query: ProjectsQuery,
    });

    return result.data.projects;
  }

  static async getProject(id) {
    const result = await apolloClient.query({
      query: ProjectQuery,
      variables: {
        id,
      },
    });

    return result.data.project;
  }

  static delete(id) {
    return apolloClient.mutate({
      mutation: DeleteProjectMutation,
      variables: {
        id,
      },
    });
  }

  static async create(data) {
    const result = await apolloClient.mutate({
      mutation: CreateProjectMutation,
      variables: {
        data,
      },
    });

    return result.data.createProject;
  }
}
