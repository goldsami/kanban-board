import gql from 'graphql-tag';

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
