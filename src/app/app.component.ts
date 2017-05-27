import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(public af: AngularFireAuth) {}

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
    this.af.auth.signOut()
      .then(() => {
        console.log('Logout');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}
