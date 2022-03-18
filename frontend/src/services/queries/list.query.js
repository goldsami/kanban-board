import gql from 'graphql-tag';

export const ListsQuery = gql`
  query Lists($projectId: String!) {
    lists(projectId: $projectId){
      id
      name
      order
      projectId
    }
  }
`;

export const CreateListMutation = gql`
  mutation CreateList($data: CreateListType!) {
    createList(data: $data){
      id
      name
      projectId
      order
    }
  }
`;

export const UpdateListMutation = gql`
  mutation UpdateList($id: String!, $data: CreateListType!) {
    updateList(id: $id, data: $data){
      id
      name
      projectId
      order
    }
  }
`;

export const DeleteListMutation = gql`
  mutation DeleteList($id: String!) {
    deleteList(id: $id){
      id
      name
      projectId
      order
    }
  }
`;
