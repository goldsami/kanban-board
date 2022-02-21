import gql from 'graphql-tag';

export const ProjectsQuery = gql`
  query Projects {
    projects {
      id
      name
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
