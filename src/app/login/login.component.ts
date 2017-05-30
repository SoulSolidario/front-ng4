import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService, private router: Router) { }

  onSubmitLogin(formLogin) {
    this.service.login(formLogin);
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
