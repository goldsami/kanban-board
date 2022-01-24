import { UserRepository, UserAdapter } from '../data';
import { Container } from 'inversify';
import { TYPES } from './types';

const myContainer = new Container();
myContainer.bind<UserRepository>(TYPES.UserRepository).to(UserAdapter);

export { myContainer };
