import gql from 'graphql-tag';

export const ProjectsQuery = gql`
  query Projects {
    projects {
      id
      name
    }
  }
`;

export const ProjectQuery = gql`
  query Project($id: String!) {
    project(id: $id) {
      id
      name
      lists {
        id
        name
        projectId
        tasks {
          id
          listId
          name
        }
      }
    }
  }
`;

export const CreateProjectMutation = gql`
  mutation CreateProject($data: CreateProjectType!) {
    createProject(data: $data){
      id
      name
    }
  }
`;

export const DeleteProjectMutation = gql`
  mutation DeleteProject($id: String!) {
    deleteProject(id: $id){
      id
      name
    }
  }
`;
