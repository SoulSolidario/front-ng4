import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginService } from './login/login.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  title = 'app works!';

  constructor(public af: AngularFireAuth, private service: LoginService) {
    this.user = this.af.authState;
  }

  /* canActivate(): Observable<boolean> {
    return this.af.authState
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          // this.router.navigate(['/login']);
        } else {
          console.log('Brasilllll');
        }
      })
      ;
  } */

  logout() {
    this.service.logout();
  }

}
