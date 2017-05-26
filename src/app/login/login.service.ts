import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginService {
  user: any;

  constructor(private afAuth: AngularFireAuth) {
    //this.user = this.afAuth.auth.currentUser;
  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }
  state(){
    console.log(this.user);
  }

}
