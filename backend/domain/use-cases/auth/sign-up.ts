import { authRepository, createUserUseCase } from '..';
import { SignUpInputType } from '../../models';

export async function signUpUseCase(credentials: SignUpInputType, repository = authRepository): Promise<string> {
  const res = await repository.signUp(credentials);
  await createUserUseCase({
    name: credentials.name,
    authId: res.userId,
  });
  return res.token;
}
