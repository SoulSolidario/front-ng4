import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  user: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    // this.user = this.afAuth.auth.currentUser;
  }

  createUser(data) {
    this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
      .then(
      (success2) => {
        console.log(success2);
        this.router.navigate(['member']);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  login(formLogin) {
    this.afAuth.auth.signInWithEmailAndPassword(formLogin.value.mail, formLogin.value.pass)
      .then(
      (success2) => {
        console.log(success2);
        this.router.navigate(['member']);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(() => {
        console.log('Logout');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loginAnonymous() {
    this.afAuth.auth.signInAnonymously();
  }
  state() {
    console.log(this.user);
  }

}
