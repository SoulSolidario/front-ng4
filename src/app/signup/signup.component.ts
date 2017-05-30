import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginService } from './../login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: LoginService, private router: Router) { }

  onSubmit(form) {
    console.log(form.value);
    this.service.createUser(form.value);
  }

  googleLogin() {
    this.service.googleProvider();
  }

  faceLogin() {
    this.service.faceProvider();
  }

  githubLogin() {
    this.service.githubProvider();
  }

  twitterLogin() {
    this.service.twitterProvider();
  }

  ngOnInit() {
    if(this.service.getCurrentUser()){
      this.service.getUid();
    }
  }

}
