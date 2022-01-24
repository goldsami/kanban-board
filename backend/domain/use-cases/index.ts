import { UserRepository } from '../../data';
import { myContainer, TYPES } from '../../di';

const userRepository = myContainer.get<UserRepository>(TYPES.UserRepository);


export * from './user';
export { userRepository };
