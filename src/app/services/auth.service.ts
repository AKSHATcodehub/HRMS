import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FEATURES } from '../constant/routes';
@Injectable()
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private route:Router
  ) {}
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider:any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result:any) => {
        console.log(result.credential.accessToken)
        sessionStorage.setItem('token', result.credential.accessToken);
        this.route.navigate([FEATURES.fullUrl]);  

        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
