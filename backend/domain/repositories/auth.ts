import { AuthCredentials } from '../models';

export interface AuthRepository {
  login(credentials: AuthCredentials): Promise<string>;
  signUp(credentials: AuthCredentials): Promise<string>;
}
