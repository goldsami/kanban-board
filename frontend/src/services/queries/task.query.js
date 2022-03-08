import gql from 'graphql-tag';

export const CreateTaskMutation = gql`
  mutation CreateTask($data: CreateTaskType!) {
    createTask(data: $data){
      id
      name
      listId
      order
    }
  }
`;

export const UpdateTaskMutation = gql`
  mutation UpdateTask($id: String!, $data: CreateTaskType!) {
    updateTask(id: $id, data: $data){
      id
      name
      listId
      order
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
