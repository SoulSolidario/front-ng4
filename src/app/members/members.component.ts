import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  private name: string;

  constructor(public af: AngularFireAuth) { }

  ngOnInit() {
    this.af.authState.subscribe(auth => {
      if (auth) {
        this.name = auth.email;
      }
    });
  }

}
