import { CreateProjectMutation, DeleteProjectMutation, ProjectsQuery } from './queries/project.query';
import {apolloClient} from "@/main";

export class ProjectService {
  static async getProjects() {
    const result = await apolloClient.query({
      query: ProjectsQuery
    });

    return result.data.projects;
  }

  static deleteProject(id) {
    return apolloClient.mutate({
      mutation: DeleteProjectMutation,
      variables: {
        id
      }
    })
  }

  static async createProject(data) {
    const result = await apolloClient.mutate({
      mutation: CreateProjectMutation,
      variables: {
        data
      }
    })

    return result.data.createProject
  }
}
