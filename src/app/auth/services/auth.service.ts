import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

import { User } from '@core/models/user';
import { RoleValidator } from '@auth/helpers/roleValidator';

@Injectable({ providedIn: 'root' })
export class AuthService extends RoleValidator {
  public user$: Observable<User>;
  public userData: any;
  public credentialData: any;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    super();
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = JSON.parse(JSON.stringify(user));
        this.user$ = this.userData.providerData[0];
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  async loginGoogle(): Promise<User> {
    try {
      const { user, credential } = await this.afAuth.signInWithPopup(
        new auth.GoogleAuthProvider()
      );
      this.updateUserData(user);
      this.credentialData = credential;
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      this.updateUserData(user);

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
      });
    } catch (error) {
      console.log(error);
    }
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: 'ADMIN',
    };

    return userRef.set(data, { merge: true });
  }

  getUser() {
console.log(this.user$);
    return this.user$;
  }

  getCredential() {
    return this.credentialData;
  }
}
