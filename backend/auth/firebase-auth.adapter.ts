import { AuthCredentials, AuthRepository } from '../domain';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
} from 'firebase/auth';
import { injectable } from 'inversify';
import config from './firebase-config.json';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const admin = require('firebase-admin');

@injectable()
export class FirebaseAuthAdapter implements AuthRepository {
  private auth: Auth;
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(config),
    });
    this.auth = getAuth();
  }

  /**
   * Returns token
   */
  async login(credentials: AuthCredentials): Promise<string> {
    const userCredential = await signInWithEmailAndPassword(this.auth, credentials.email, credentials.password);
    return userCredential.user.getIdToken();
  }

  /**
   * Returns token
   */
  async signUp(credentials: AuthCredentials): Promise<string> {
    const userCredential = await createUserWithEmailAndPassword(this.auth, credentials.email, credentials.password);
    return userCredential.user.getIdToken();
  }

  /**
   * Returns userId
   */
  async verifyToken(token: string): Promise<string> {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken.user_id;
  }
}
