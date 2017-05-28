import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login/login.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  user: Observable<firebase.User>;
  private name: string;

  constructor(public af: AngularFireAuth, private service: LoginService) {
    this.user = this.af.authState;
    console.log(this.user);
  }

  ngOnInit() {
    this.af.authState.subscribe(auth => {
      if (auth) {
        this.name = auth.email;
      }
    });
  }



  logout() {
    this.service.logout();
  }

}
