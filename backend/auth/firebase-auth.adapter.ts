import { AuthCredentials, AuthRepository } from '../domain';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
} from 'firebase/auth';
import { injectable } from 'inversify';

@injectable()
export class FirebaseAuthAdapter implements AuthRepository {
  private auth: Auth;
  constructor() {
    this.auth = getAuth();
  }

  async login(credentials: AuthCredentials): Promise<string> {
    const userCredential = await signInWithEmailAndPassword(this.auth, credentials.email, credentials.password);
    return userCredential.user.getIdToken();
  }

  async signUp(credentials: AuthCredentials): Promise<string> {
    const userCredential = await createUserWithEmailAndPassword(this.auth, credentials.email, credentials.password);
    return userCredential.user.getIdToken();
  }

}
