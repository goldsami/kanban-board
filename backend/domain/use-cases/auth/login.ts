import { authRepository } from '..';
import { AuthCredentials } from '../../models';

export async function loginUseCase(credentials: AuthCredentials, repository = authRepository): Promise<string> {
  const { token } = await repository.login(credentials);
  return token;
}
