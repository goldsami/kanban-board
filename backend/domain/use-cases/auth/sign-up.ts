import { authRepository, createUserUseCase } from '..';
import { SignUpInputType } from '../../models';

export async function signUpUseCase(credentials: SignUpInputType, repository = authRepository): Promise<string> {
  const token = await repository.signUp(credentials);
  await createUserUseCase({
    name: credentials.name,
  });
  return token;
}
