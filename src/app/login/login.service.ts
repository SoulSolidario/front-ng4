import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {
  user: Observable<firebase.User>;
  uid: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) {

  }

  createUser(data) {
    this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
    .then(
      (success2) => {
        console.log(success2);
        this.router.navigate(['/passo-1']);
      })
    .catch(function (error) {
      console.log(error);
    });
  }

  login(formLogin) {
    this.afAuth.auth.signInWithEmailAndPassword(formLogin.value.mail, formLogin.value.pass)
    .then(
      (success2) => {
        this.getUid();
      })
    .catch(function (error) {
      console.log(error);
    });
  }

  googleProvider(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((data) => {
      console.log(data.user);
      this.router.navigate(['/member/' + data.user.uid]);
    }).catch((error) => {
      alert(error.message);
    });
  }

  faceProvider(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((data) => {
      console.log(data.user);
      this.router.navigate(['/member/' + data.user.uid]);
    }).catch((error) => {
      alert(error.message)
    });
  }

  githubProvider(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then((data) => {
      console.log(data.user);
      this.router.navigate(['/member/' + data.user.uid]);
    }).catch((error) => {
      alert(error.message)
    });
  }

  twitterProvider(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then((data) => {
      console.log(data.user);
      this.router.navigate(['/member/' + data.user.uid]);
    }).catch((error) => {
      alert(error.message)
    });
  }

  logout() {
    this.afAuth.auth.signOut()
    .then(() => {
      this.router.navigate(['']);
      console.log('Logout');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  loginAnonymous() {
    this.afAuth.auth.signInAnonymously();
  }

  getCurrentUser(){
    this.user = this.afAuth.authState;
    return this.user;
  }

  getUid() {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigate(['/member/' + auth.uid]);
      }
    });
  }

}
