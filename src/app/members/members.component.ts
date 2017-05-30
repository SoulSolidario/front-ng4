import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../login/login.service';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  user: any;
  name: string;
  uid: any;
  img: any;
  area1: any;
  area2: any;
  area3: any;
  member: FirebaseObjectObservable<any>;

  constructor(private service: LoginService,
    private db: AngularFireDatabase, private router: Router) {}

  ngOnInit() {
    this.user = this.service.getCurrentUser();

    this.user.subscribe(auth => {
      if (auth) {
        this.name = auth.displayName;
        this.uid = auth.uid;
        this.img = auth.photoURL;
        this.member = this.db.object('/members/' + this.uid, { preserveSnapshot: true });
        this.member.subscribe(snapshot => {

          if(snapshot.val()) {
            this.area1 = snapshot.val().areas.passo1;
            this.area2 = snapshot.val().areas.passo2;
            this.area3 = snapshot.val().areas.passo3;

          }else{
            this.router.navigate(['/passo-1']);
          }
        });

      }
    });
  }

  logout() {
    this.service.logout();
  }

}
