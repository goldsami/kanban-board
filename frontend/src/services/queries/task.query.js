import gql from "graphql-tag";

export const CreateTaskMutation = gql`
  mutation CreateTask($data: CreateTaskType!) {
    createTask(data: $data){
      id
      name
      listId
    }
  }
`;

export const DeleteTaskMutation = gql`
  mutation DeleteTask($id: String!) {
    deleteTask(id: $id){
      id
      name
      listId
    }
  }
`;
