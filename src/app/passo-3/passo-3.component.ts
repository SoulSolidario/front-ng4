import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-passo-3',
  templateUrl: './passo-3.component.html',
  styleUrls: ['./passo-3.component.css']
})
export class Passo3Component implements OnInit {
  private title: string = "O que comove você?";
  user: any;
  member: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase,
    private service: LoginService, private router: Router) {


  }

  ngOnInit() {
  }

  log(num) {
    let newResp = localStorage.getItem('respQuiz');
    let aux = JSON.parse(newResp);

    aux.passo3 = num;
    localStorage.setItem('respQuiz', JSON.stringify(aux));
    this.postResult();
  }

  postResult(){
    this.user = this.service.getCurrentUser();
    this.user.subscribe(auth => {
      if (auth) {
        this.member = this.db.object('/members/' + auth.uid);

        let salveAreas = JSON.parse(localStorage.getItem('respQuiz'));

        this.member.set({areas: salveAreas});
        this.router.navigate(['/member/' + auth.uid]);
      }
    });

  }

}
